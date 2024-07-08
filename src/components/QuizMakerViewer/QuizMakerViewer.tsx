import { FC } from 'react';
import { IAnswers, IQuestion } from '../../models/questions.model';
import Question from '../Question/Question';
import './QuizMakerViewer.css';

interface QuizMakerViewerProps { 
  questions: IQuestion[], 
  mode: 'EDIT' | 'VIEW', 
  onAnswerSelection?: (question: string, answer: string)=>void,
  currentAnswers: IAnswers
}

const QuizMakerViewer: FC<QuizMakerViewerProps> = ({ questions, mode, onAnswerSelection, currentAnswers } : QuizMakerViewerProps) => {

  return (
    <div className="QuizMakerViewer">
      { questions ? questions.map( (q, index) => 
        <Question 
          key={index} 
          question={q}
          answer={currentAnswers[q.question] ?? ''}
          onAnswerSelection={onAnswerSelection}
          disabled={mode === 'VIEW'}
        ></Question>
      ) : []}
    </div>
  );
}

export default QuizMakerViewer;
