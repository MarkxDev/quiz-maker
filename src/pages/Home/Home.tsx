import { FC, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
  let [currentAnswers, setCurrentAnswers] = useState<{ [propName: string]: string }>({})

  function handleAnswers(question: string, answer: string) {
    let updatedCurrentAnswers;
    if(answer){
      updatedCurrentAnswers = {...currentAnswers, [question]: answer };
    } else {
      updatedCurrentAnswers = { ...currentAnswers };
      delete updatedCurrentAnswers[question];
    }
    setCurrentAnswers(updatedCurrentAnswers);
  }

  function handleSubmit(category:number,difficulty:string) {
    getQuestions(category, difficulty)
    .then((data)=>{
      const questionsTmp = (data.results as IQuestion[])?.map(q => ({...q, all_answers: shuffle([...q.incorrect_answers, q.correct_answer])}) );
      setQuestions( questionsTmp );
    });
  }

  return (
    <div className="Home" data-testid="Home">
      <h2>QUIZ MAKER</h2>
      <QuizMakerForm cartegoriesResource={cartegoriesResource} onSubmit={handleSubmit}></QuizMakerForm>
      <QuizMakerViewer questions={questions} mode="EDIT" onAnswerSelection={handleAnswers} currentAnswers={currentAnswers}></QuizMakerViewer>
      {
        Object.entries(currentAnswers).length === 5 ?
        <Link id="submitAnswersLink" to="/results" state={{currentAnswers, questions}}>
          <button id="submitAnswersBtn">
            Submit
          </button> 
        </Link> 
        : ''
      }
    </div>
);}

export default Home;
