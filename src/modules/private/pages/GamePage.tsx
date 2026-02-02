import CategorySmall from '../components/CategorySmall';
import CategoryCard from '../components/CategoryCard';
import type { Key } from 'react';
import { useGetQuiz, type Quiz } from '@/api/useGetQuiz';

const GamePage = () => {
  const { data: quizzes } = useGetQuiz();
  const highlightedQuizzes = quizzes?.filter((quiz: Quiz) => quiz.highlighted);

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#171810]">Seleção de Categorias</h1>
          <p className="text-lg text-gray-500">Comece pelos desafios mais populares ou explore todas as categorias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlightedQuizzes?.map((quiz: Quiz, index: Key | null | undefined) => (
            <CategoryCard key={index} category={quiz} />
          ))}
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <h2 className="text-2xl font-bold tracking-tight text-center text-[#171810]">Todas as Categorias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quizzes?.map((quiz: Quiz, index: Key | null | undefined) => (
              <CategorySmall key={index} category={quiz} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GamePage;
