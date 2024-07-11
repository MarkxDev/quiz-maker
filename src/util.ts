import { IQuestion } from "./models/questions.model";

export const shuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 

export const currentAnswers = (questions: IQuestion[]) => {
    return questions.map(q => q.current_answer).filter(ca => !!ca);
}