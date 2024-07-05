import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { FC } from 'react';
import { IQuestion } from '../../models/questions.model';
import './Question.css';

interface QuestionProps { question: IQuestion, onAnswerSelection?: (question: string, answer: string)=>void, disabled: boolean }

const Question: FC<QuestionProps> = ( { question, onAnswerSelection, disabled }: QuestionProps ) => {

  const [answer, setAnswer] = React.useState<string>('');

  const handleAnswer = (
    event: React.MouseEvent<HTMLElement>,
    newAnswer: string,
  ) => {
    if(onAnswerSelection) {
      onAnswerSelection(question.question, newAnswer);
    }
    setAnswer(newAnswer);
  };

  return (
    <div className="Question" style={{marginBottom: 10}}>
      <div style={{marginBottom: 5}} dangerouslySetInnerHTML={{__html: question.question}}></div>
      <ToggleButtonGroup
        value={answer}
        exclusive
        onChange={handleAnswer}
        aria-label="text answer"
        disabled={disabled}
      >
        {question ? question.all_answers!.map( (a, index) => 
          <ToggleButton key={index} value={a} aria-label="left aligned">
            {a}
          </ToggleButton> 
        ) : []}
      </ToggleButtonGroup>
    </div>
  );
};

export default Question;
