export type QuestionOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuestionOption[];
};

export type Category = {
  id?: string;
  title: string;
  description?: string;
  color?: string;
  slug: string;
  highlighted?: boolean;
  questions?: QuizQuestion[];
};
