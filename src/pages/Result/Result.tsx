import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuizMakerViewer from '../../components/QuizMakerViewer/QuizMakerViewer';
import './Result.css';
import { IQuestion } from '../../models/questions.model';

interface ResultProps {}

const Result: FC<ResultProps> = () => {
  const location = useLocation();

  function countCorrectAnswers() {
    let count = 0;
    const answers = (location.state.currentAnswers as {[propName: string]: string});
    for(let question of location.state.questions as IQuestion[]) {
      const answer = answers[question.question];
      if(answer && answer === question.correct_answer ){
        count++;
      }
    }
    return count;
  }

  return (
    <div className="Result" data-testid="Result">
      <h2>QUIZ MAKER</h2>
      <h4>Results</h4>
      <QuizMakerViewer questions={location.state.questions} currentAnswers={location.state.currentAnswers} mode="VIEW" ></QuizMakerViewer>

      <div>You scored {countCorrectAnswers()} out of 5</div>

      <Link id="submitAnswersBtn" to="/">
        <button id="submitAnswersBtn">
          Create a new Quiz
        </button> 
      </Link> 
    </div>
  );
}

export default Result;
