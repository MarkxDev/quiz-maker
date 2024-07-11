import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC, MouseEvent} from 'react';
import { IQuestion } from '../../models/questions.model';
import './Question.css';

interface QuestionProps { 
  question: IQuestion, 
  onAnswerSelection?: (questionId: number, answer: string)=>void, 
  disabled: boolean
}

const Question: FC<QuestionProps> = ( { question, onAnswerSelection, disabled }: QuestionProps ) => {

  const handleAnswer = (
    event: MouseEvent<HTMLElement>,
    newAnswer: string,
  ) => {
    if(!disabled && onAnswerSelection) {
      onAnswerSelection(question.id, newAnswer);
    }
  };

  function getToggleButtonColor(currentAnswer: string): 'standard' | 'error' | 'success' {
    if (currentAnswer === question.correct_answer) {
      return 'success';
    }
    if (currentAnswer === question.current_answer) {
      return 'error';
    }
    return 'standard';
  }

  function getToggleButtonSelection(currentAnswer: string): boolean {
    if(currentAnswer === question.correct_answer || currentAnswer === question.current_answer) {
      return true;
    }
    return false;
  }

  function getToggleButton(a: string, index: number) {
    return disabled ?  (
      <ToggleButton key={index} value={a} 
        selected={getToggleButtonSelection(a)} 
        color={getToggleButtonColor(a)} 
        aria-label="left aligned" 
      >
        <div dangerouslySetInnerHTML={{__html: a}}></div>
      </ToggleButton> 
    ) : (
      <ToggleButton key={index} value={a} 
        aria-label="left aligned" 
      >
        <div dangerouslySetInnerHTML={{__html: a}}></div>
      </ToggleButton> 
    );
  }

  return (
    <div className="Question">
      <div className='question-label' dangerouslySetInnerHTML={{__html: question.question}}></div>
      <ToggleButtonGroup
        value={question.current_answer}
        exclusive
        onChange={handleAnswer}
        aria-label="text answer"
        disabled={disabled}
      >
        {question ? question.all_answers!.map((a, index) => getToggleButton(a, index)) : []}
      </ToggleButtonGroup>
    </div>
  );
};

export default Question;
