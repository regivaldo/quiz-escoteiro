import { ArrowLeftIcon, CheckIcon, HouseIcon, XIcon, ClockIcon } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

type UserAnswer = {
  question: string;
  userAnswer: string | null;
  correctAnswer: string;
  isCorrect: boolean;
  timedOut: boolean;
};

const ResultDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userAnswers: UserAnswer[] = location.state?.userAnswers || [];

  // Redireciona se acessar diretamente sem dados
  useEffect(() => {
    if (!userAnswers || userAnswers.length === 0) {
      navigate('/game');
    }
  }, [userAnswers, navigate]);

  if (!userAnswers || userAnswers.length === 0) return null;

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center p-4"
      style={{ minHeight: 'calc(100vh - 144px - 64px - 64px)' }}
    >
      <div className="w-full max-w-3xl px-4 py-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#1c1e14] md:text-4xl">
            Revisão do Quiz
          </h1>
          <p className="mt-2 text-lg text-gray-600">Confira suas respostas</p>
        </div>

        {/* Answers List */}
        <div className="mt-8 space-y-6">
          {userAnswers.map((answer, index) => (
            <div key={index} className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div
                className={`border-l-8 p-6 ${
                  answer.timedOut ? 'border-orange-500' : answer.isCorrect ? 'border-primary' : 'border-red-500'
                }`}
              >
                <p className="text-lg font-semibold text-[#1c1e14]">
                  {index + 1}. {answer.question}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white ${
                        answer.timedOut ? 'bg-orange-500' : answer.isCorrect ? 'bg-primary' : 'bg-red-500'
                      }`}
                    >
                      {answer.timedOut ? (
                        <ClockIcon size={20} weight="bold" />
                      ) : answer.isCorrect ? (
                        <CheckIcon size={20} weight="bold" />
                      ) : (
                        <XIcon size={20} weight="bold" />
                      )}
                    </div>
                    <p className="text-gray-700">
                      {answer.timedOut ? (
                        <span className="font-medium text-orange-600">O tempo acabou e você não respondeu</span>
                      ) : (
                        <>
                          Sua resposta:{' '}
                          <span className={`font-medium ${!answer.isCorrect ? 'text-red-500 line-through' : ''}`}>
                            {answer.userAnswer}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                  {!answer.isCorrect && answer.correctAnswer && (
                    <div className="ml-11 text-sm text-gray-600">
                      <p>
                        Resposta correta: <span className="font-medium text-primary">{answer.correctAnswer}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/game/resultado"
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-secondary px-6 text-base font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-100 sm:w-auto"
          >
            <ArrowLeftIcon size={20} />
            <span className="truncate">Voltar aos Resultados</span>
          </Link>
          <Link
            to="/game"
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-transparent px-6 text-base font-bold text-gray-700 transition-colors hover:bg-gray-100 sm:w-auto"
          >
            <HouseIcon size={20} />
            <span className="truncate">Voltar para o Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultDetailPage;
