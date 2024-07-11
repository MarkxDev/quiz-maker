export interface IQuestion {
  id: number,
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[],
  all_answers?: string[],
  current_answer?: string;
}