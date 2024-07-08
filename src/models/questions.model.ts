export interface IQuestion {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[],
  all_answers?: string[]
}

export interface IAnswers { 
  [propName: string]: string 
}