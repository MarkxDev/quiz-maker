import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizMakerForm from '../../components/QuizMakerForm/QuizMakerForm';
import { ICategoryResource } from '../../models/category.model';
import './Home.css';
import { getQuestions } from '../../api';
import { IQuestion } from '../../models/questions.model';
import QuizMakerViewer from '../../components/QuizMakerViewer/QuizMakerViewer';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

  const cartegoriesResource = useLoaderData() as ICategoryResource;
  console.log('[Home] cartegoriesResource: ', cartegoriesResource);

  let [ questions, setQuestions ] = useState([]); 

  function handleSubmit(category:number,difficulty:string) {
    console.log('[Home.handleSubmit] category: ', category, ' difficulty: ', difficulty);
    getQuestions(category, difficulty)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log('[Home.handleSubmit] response data: ', data);
      setQuestions(data.results);
    });
  }

  // useEffect(()=>{
  //   console.log('[Home.useEffect] cartegoriesResource: ', cartegoriesResource);
  // },[cartegories]);

  return (
    <div className="Home" data-testid="Home">
      <QuizMakerForm cartegoriesResource={cartegoriesResource} onSubmit={handleSubmit}></QuizMakerForm>
      <QuizMakerViewer questions={questions} ></QuizMakerViewer>
    </div>
);}

export default Home;
