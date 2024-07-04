import React, { BaseSyntheticEvent, FC } from 'react';
import { IQuestion } from '../../models/questions.model';
import Question from '../Question/Question';
import './QuizMakerViewer.css';

interface QuizMakerViewerProps { questions: IQuestion[] }

const QuizMakerViewer: FC<QuizMakerViewerProps> = ({ questions } : QuizMakerViewerProps) => {

  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    console.log('[QuizMakerViewer.handleSubmit] e.target: ', e.target.getElementsByTagName('input'));
    const data = new FormData(e.target);
    console.log('[QuizMakerViewer.handleSubmit] formData: ', data);
  }

  return (
    <div className="QuizMakerViewer">
      <form id="formQuestions" onSubmit={handleSubmit} style={{marginTop: 15}}>

        <div> 
          {questions ? questions.map( (q, index) => 
            <Question key={index} question={q} ></Question>
          ) : []}
        </div>

        <button id="submitAnswersBtn" type="submit">
           Submit
        </button>
      </form>

    </div>
  );
}

export default QuizMakerViewer;
