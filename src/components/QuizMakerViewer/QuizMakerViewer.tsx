import { BaseSyntheticEvent, FC, useState } from 'react';
import { IQuestion } from '../../models/questions.model';
import Question from '../Question/Question';
import './QuizMakerViewer.css';

interface QuizMakerViewerProps { questions: IQuestion[] }

const QuizMakerViewer: FC<QuizMakerViewerProps> = ({ questions } : QuizMakerViewerProps) => {

  let [currentAnswers, setCurrentAnswers] = useState<{ [propName: string]: string }>({})

  function handleAnswers(question: string, answer: string) {
    let updatedCurrentAnswers;
    if(answer){
      updatedCurrentAnswers = {...currentAnswers, [question]: answer };
    } else {
      updatedCurrentAnswers = { ...currentAnswers };
      delete updatedCurrentAnswers[question];
    }
    setCurrentAnswers(updatedCurrentAnswers);
  }

  // useEffect(()=>{
  //   console.log('[QuizMakerViewer.handleAnswers] currentAnswers: ', currentAnswers);
  //   console.log('[QuizMakerViewer.handleAnswers] currentAnswers length: ', Object.entries(currentAnswers).length); 
  // })

  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    console.log('[QuizMakerViewer.handleSubmit] currentAnswers: ', currentAnswers);
  }

  return (
    <div className="QuizMakerViewer">
      <form id="formQuestions" onSubmit={handleSubmit} style={{marginTop: 15}}>

        <div> 
          {questions ? questions.map( (q, index) => 
            <Question 
              key={index} 
              question={q}
              onAnswerSelection={handleAnswers}
            ></Question>
          ) : []}
        </div>
          {
            Object.entries(currentAnswers).length === 5 ?
            <button id="submitAnswersBtn" type="submit">
              Submit
            </button> 
            : ''
          }
      </form>

    </div>
  );
}

export default QuizMakerViewer;
