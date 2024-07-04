import { BaseSyntheticEvent, FC, ReactNode } from 'react';
import { ICategoryResource } from '../../models/category.model';
import './QuizMakerForm.css';

interface QuizMakerFormProps {
  cartegoriesResource: ICategoryResource, 
  onSubmit: (category:number, difficulty:string) => void 
}

const QuizMakerForm: FC<QuizMakerFormProps> = ( { cartegoriesResource, onSubmit }: QuizMakerFormProps ) => {

  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    console.log('You clicked submit.: ', e);
    const category = e.target[0].value;
    const difficulty = e.target[1].value;
    console.log('[] category: ', category, ' difficulty: ', difficulty);
    onSubmit(category, difficulty);
  }

  let categorySelectOptions: ReactNode[] = cartegoriesResource.trivia_categories.map((category, index)=> <option key={index} value={category.id}>{category.name}</option> );
  return (
    <div className="QuizMakerForm">
      <div className="well">
        <h2>QUIZ MAKER</h2>
        <h4>Select category and difficulty:</h4>
        <form id="formCD" onSubmit={handleSubmit}>
          <select id="categorySelect">
            <option value="">Select a category</option>
            { categorySelectOptions }
          </select>
          <select id="difficultySelect">
            <option value="">Select a difficulty</option>
            <option value="easy"> Easy </option>
            <option value="medium"> Medium </option>
            <option value="hard"> Hard </option>
          </select>
          <button id="createBtn" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizMakerForm;
