import { useQuery } from '@tanstack/react-query';

interface Question {
    id: number;
    question: string;
    answer: string;
    options: string[];
}

export interface Quiz {
    id: number;
    title: string;
    slug: string;
    description: string;
    questions: Question[];
    highlighted?: boolean;
    color?: string;
}

const fetchQuizzes = async (): Promise<Quiz[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/games');
    if (!response.ok) {
        throw new Error('Erro ao carregar quizzes');
    }
    return response.json();
};

export const useGetQuiz = () => {
    return useQuery({
        queryKey: ['quizes'],
        queryFn: fetchQuizzes,
    });
};
