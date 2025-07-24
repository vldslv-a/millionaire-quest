export type QuestionOption = {
  id: string;
  text: string;
};

export type Question = {
  id: number;
  prizeAmount: number;
  questionText: string;
  correctAnswer: string;
  options: QuestionOption[];
};
