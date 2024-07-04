import React, { FC } from 'react';
import './Question.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { IQuestion } from '../../models/questions.model';

interface QuestionProps { question: IQuestion }

const Question: FC<QuestionProps> = ( { question }: QuestionProps ) => {
   const [answer, setAnswer] = React.useState<string>('');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAnswer: string,
  ) => {
    setAnswer(newAnswer);
  };

  return (
    <div className="Question" style={{marginBottom: 10}}>
      <div style={{marginBottom: 5}} dangerouslySetInnerHTML={{__html: question.question}}></div>
      <ToggleButtonGroup
        value={answer}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        {question ? [...question.incorrect_answers, question.correct_answer].map( (a, index) => 
          <ToggleButton key={index} value={a} aria-label="left aligned">
            {a}
          </ToggleButton> 
        ) : []}
      </ToggleButtonGroup>
      <input type="hidden" id={question.question} name={question.question} value={answer} />
    </div>
  );
};

export default Question;
