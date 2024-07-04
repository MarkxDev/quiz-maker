import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizMakerForm from '../../components/QuizMakerForm/QuizMakerForm';
import { ICategoryResource } from '../../models/category.model';
import './Home.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

  const cartegoriesResource = useLoaderData() as ICategoryResource;
  console.log('[Home] cartegoriesResource: ', cartegoriesResource);

  // useEffect(()=>{
  //   console.log('[Home.useEffect] cartegoriesResource: ', cartegoriesResource);
  // },[cartegories]);

  return (
    <div className="Home" data-testid="Home">
      <QuizMakerForm cartegoriesResource={cartegoriesResource}></QuizMakerForm>
    </div>
);}

export default Home;
