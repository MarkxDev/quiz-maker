import { FC } from 'react';
import { IQuestion } from '../../models/questions.model';
import Question from '../Question/Question';
import './QuizMakerViewer.css';

interface QuizMakerViewerProps { 
  questions: IQuestion[], 
  mode: 'EDIT' | 'VIEW', 
  onAnswerSelection?: (question: string, answer: string)=>void,
  currentAnswers: { [propName: string]: string }
}

const QuizMakerViewer: FC<QuizMakerViewerProps> = ({ questions, mode, onAnswerSelection, currentAnswers } : QuizMakerViewerProps) => {

  return (
    <div className="QuizMakerViewer">
      <div style={{marginTop: 15}}>

        <div> 
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
      </div>

    </div>
  );
}

export default QuizMakerViewer;
