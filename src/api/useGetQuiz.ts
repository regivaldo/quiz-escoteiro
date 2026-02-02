import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import type { Category } from '@/types/category';

export type Quiz = Category;

const fetchQuizzes = async (): Promise<Quiz[]> => {
  const querySnapshot = await getDocs(collection(db, 'quizzes'));
  return querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Quiz,
  );
};

export const useGetQuiz = () => {
  return useQuery({
    queryKey: ['quizzes'],
    queryFn: fetchQuizzes,
  });
};
