import { FC, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getQuestions } from '../../api';
import QuizMakerForm from '../../components/QuizMakerForm/QuizMakerForm';
import QuizMakerViewer from '../../components/QuizMakerViewer/QuizMakerViewer';
import { ICategoryResource } from '../../models/category.model';
import { IQuestion } from '../../models/questions.model';
import { currentAnswers, shuffle } from '../../util';
import './Home.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

  const cartegoriesResource = useLoaderData() as ICategoryResource;

  let [questions, setQuestions ] = useState<IQuestion[]>([]);

  function handleAnswers(questionId: number, answer: string): void {
    const tmpQuestions = [...questions];
    tmpQuestions.find(q => q.id === questionId)!.current_answer = answer;
    setQuestions(tmpQuestions);
  }

  function handleSubmit(category:number,difficulty:string): void {
    getQuestions(category, difficulty)
    .then((data)=>{
      if(data) {
        const questionsTmp = (data.results as IQuestion[])?.map((q, i) => ({...q, id: i, all_answers: shuffle([...q.incorrect_answers, q.correct_answer])}) ?? [] );
        setQuestions(questionsTmp);
      }
    });
  }

  return (
    <div className="Home" data-testid="Home">
      <h2>QUIZ MAKER</h2>
      <QuizMakerForm cartegoriesResource={cartegoriesResource} onSubmit={handleSubmit}></QuizMakerForm>
      <QuizMakerViewer questions={questions} mode="EDIT" onAnswerSelection={handleAnswers}></QuizMakerViewer>
      {
        Object.entries(currentAnswers(questions)).length === 5 ?
        <Link id="submitAnswersLink" to="/results" state={{questions}}>
          <button id="submitAnswersBtn">
            Submit
          </button> 
        </Link> 
        : ''
      }
    </div>
);}

export default Home;
