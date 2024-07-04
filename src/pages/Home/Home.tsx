import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getQuestions } from '../../api';
import QuizMakerForm from '../../components/QuizMakerForm/QuizMakerForm';
import QuizMakerViewer from '../../components/QuizMakerViewer/QuizMakerViewer';
import { ICategoryResource } from '../../models/category.model';
import { IQuestion } from '../../models/questions.model';
import { shuffle } from '../../util';
import './Home.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

  const cartegoriesResource = useLoaderData() as ICategoryResource;

  let [ questions, setQuestions ] = useState<IQuestion[]>([]);

  function handleSubmit(category:number,difficulty:string) {
    getQuestions(category, difficulty)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      const questionsTmp = (data.results as IQuestion[]).map(q => ({...q, all_answers: shuffle([...q.incorrect_answers, q.correct_answer])}) );
      setQuestions( questionsTmp );
    });
  }

  return (
    <div className="Home" data-testid="Home">
      <QuizMakerForm cartegoriesResource={cartegoriesResource} onSubmit={handleSubmit}></QuizMakerForm>
      <QuizMakerViewer questions={questions} ></QuizMakerViewer>
    </div>
);}

export default Home;
