import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuizMakerViewer from '../../components/QuizMakerViewer/QuizMakerViewer';
import './Result.css';
import { IQuestion } from '../../models/questions.model';

interface ResultProps {}

const Result: FC<ResultProps> = () => {
  const location = useLocation();

  function countCorrectAnswers(): number {
    let count = 0;
    for(let question of location.state.questions as IQuestion[]) {
      if(question.current_answer === question.correct_answer){
        count++;
      }
    }
    return count;
  }

  function getScoreColor(): string {
    const score = countCorrectAnswers();
    let scoreCssClass = "";
    if(score !== undefined){
      if(score <= 1){
        scoreCssClass = "red";
      }else if( score === 2 || score === 3 ){
        scoreCssClass = "yellow";
      } else {
        scoreCssClass = "green";
      }
    }
    return scoreCssClass;
  }

  return (
    <div className="Result" data-testid="Result">
      <h2>QUIZ MAKER</h2>
      <h4>Results</h4>
      <QuizMakerViewer questions={location.state.questions} mode="VIEW" ></QuizMakerViewer>

      <div className='score-bar' style={{backgroundColor: getScoreColor()}}>You scored {countCorrectAnswers()} out of 5</div>

      <Link id="submitAnswersBtn" to="/">
        <button id="submitAnswersBtn">
          Create a new Quiz
        </button> 
      </Link> 
    </div>
  );
}

export default Result;
