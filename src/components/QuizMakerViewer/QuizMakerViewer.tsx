import { FC } from 'react';
import { IQuestion } from '../../models/questions.model';
import Question from '../Question/Question';
import './QuizMakerViewer.css';

interface QuizMakerViewerProps { 
  questions: IQuestion[], 
  mode: 'EDIT' | 'VIEW', 
  onAnswerSelection?: (questionId: number, answer: string)=>void
}

const QuizMakerViewer: FC<QuizMakerViewerProps> = ({ questions, mode, onAnswerSelection } : QuizMakerViewerProps) => {

  return (
    <div className="QuizMakerViewer">
      { questions ? questions.map( (q, index) => 
        <Question 
          key={index} 
          question={q}
          onAnswerSelection={onAnswerSelection}
          disabled={mode === 'VIEW'}
        ></Question>
      ) : []}
    </div>
  );
}

export default QuizMakerViewer;
