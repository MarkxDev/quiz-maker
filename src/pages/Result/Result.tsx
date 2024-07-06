import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuizMakerViewer from '../../components/QuizMakerViewer/QuizMakerViewer';
import './Result.css';

interface ResultProps {}

const Result: FC<ResultProps> = () => {
  const location = useLocation();

  useEffect(()=>{
    console.log('[Result] location: ', location);
  }, []);

  return (
    <div className="Result" data-testid="Result">
      <h2>QUIZ MAKER</h2>
      <h4>Results</h4>
      <QuizMakerViewer questions={location.state.questions} currentAnswers={location.state.currentAnswers} mode="VIEW" ></QuizMakerViewer>

      <Link id="submitAnswersBtn" to="/">
        <button id="submitAnswersBtn">
          Create a new Quiz
        </button> 
      </Link> 
    </div>
  );
}

export default Result;
