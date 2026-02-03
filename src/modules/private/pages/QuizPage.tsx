import { useState } from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react';
import OptionIcon from '../components/OptionIcon';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import { questions } from '../../../data/questions';
import { useNavigate, useParams } from 'react-router';
import { useUserStore } from '@/stores/userStore';
import { db } from '@/config/firebase';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const QuizPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { user } = useUserStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  // Score state
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch Quiz Title (using dummy simple approach for now or proper fetch)
  // Ideally we should have the full quiz object here, but for now we fetch to save the name.
  // If the QuizPage is supposed to show *fetched* questions, we should refactor to fetch the whole quiz.
  // For this specific request, I will fetch the title just before saving or on mount.
  // Since we are already here, let's fetch on mount if slug is present.
  const [quizTitle, setQuizTitle] = useState(slug);

  useEffect(() => {
    const fetchQuizTitle = async () => {
      if (!slug) return;
      try {
        // Assuming slug equals document ID for now based on AdminQuizList logic
        // If storing by slug field, we need a query.
        // AdminQuizList uses: doc(db, "quizzes", quizToDelete) which implies ID = slug.
        const docRef = doc(db, 'quizzes', slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setQuizTitle(docSnap.data().title);
        }
      } catch (error) {
        console.error('Error fetching quiz title:', error);
      }
    };
    fetchQuizTitle();
  }, [slug]);

  const totalQuestions = questions.length;
  const currentQuestionData = questions[currentQuestionIndex];
  const question = currentQuestionData.question;
  const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

  const optionIds = ['A', 'B', 'C', 'D'];
  const options = currentQuestionData.options.map((option, index) => ({
    id: optionIds[index],
    text: option.text,
    isCorrect: option.isCorrect,
  }));

  const getOptionState = (optionText: string) => {
    if (!hasConfirmed) {
      if (optionText === selectedOption) return 'selected';
      return 'default';
    }
    const selectedOptionData = options.find((opt) => opt.text === optionText);
    if (selectedOptionData?.isCorrect) return 'correct';
    if (optionText === selectedOption) return 'incorrect';
    return 'default';
  };

  const handleOptionClick = (optionText: string) => {
    if (hasConfirmed) return;
    setSelectedOption(optionText);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption) return;

    const selectedOptionData = options.find((opt) => opt.text === selectedOption);
    if (selectedOptionData?.isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }

    setHasConfirmed(true);
  };

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setHasConfirmed(false);
    }
  };

  const handleViewResult = async () => {
    if (!user) return;
    setIsSaving(true);

    try {
      const accuracy = correctCount / totalQuestions;
      const pointsPerCorrect = 100;
      const bonusPoints = accuracy >= 0.8 ? 500 : 0;
      const totalPoints = correctCount * pointsPerCorrect + bonusPoints;

      const resultData = {
        quizSlug: slug || 'unknown',
        quizTitle: quizTitle || slug || 'Quiz Sem Título',
        correctAnswers: correctCount,
        wrongAnswers: incorrectCount,
        totalPoints: totalPoints,
        respondedAt: serverTimestamp(),
        totalQuestions: totalQuestions,
      };

      await addDoc(collection(db, 'users', user.id, 'quiz_history'), resultData);

      // Atualiza o totalPoints do usuário para o ranking
      await updateDoc(doc(db, 'users', user.id), {
        totalPoints: increment(totalPoints),
      });

      navigate('/game/resultado', {
        state: {
          result: {
            ...resultData,
            respondedAt: new Date().toISOString(), // Serializable date for state
          },
        },
      });
    } catch (error) {
      console.error('Error saving quiz result:', error);
      toast.error('Erro ao salvar resultado.');
      setIsSaving(false);
    }
  };

  const getOptionClasses = (state: string) => {
    if (state === 'incorrect') {
      return 'bg-error/20 text-text ring-2 ring-error';
    }
    if (state === 'correct') {
      return 'bg-primary/20 text-text ring-2 ring-primary';
    }
    if (state === 'selected') {
      return 'bg-secondary/20 text-text ring-2 ring-secondary';
    }
    return 'bg-surface hover:bg-secondary/20 ring-1 ring-inset ring-black/10 hover:ring-secondary';
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        {/* Header with Progress and Timer */}
        <div className="mb-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <ProgressBar currentQuestion={currentQuestionIndex + 1} totalQuestions={totalQuestions} />
            <Timer startTime="01:30" />
          </div>
        </div>

        {/* Main Quiz Card */}
        <div className="flex w-full flex-col items-center rounded-xl bg-surface p-6 sm:p-8 shadow-lg">
          {/* Question */}
          <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tight text-text sm:text-3xl">
            {question}
          </h1>

          {/* Answer Options */}
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {options.map((option) => {
              const state = getOptionState(option.text);
              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.text)}
                  disabled={hasConfirmed}
                  className={`flex min-w-[84px] cursor-pointer items-center justify-start gap-4 overflow-hidden rounded-lg h-14 px-5 text-base font-bold leading-normal tracking-[0.015em] w-full transition-all ${getOptionClasses(state)}`}
                >
                  <OptionIcon state={state} id={option.id} />
                  <span className="truncate">{option.text}</span>
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="mt-8 flex w-full justify-center">
            {!hasConfirmed ? (
              <button
                onClick={handleConfirmAnswer}
                disabled={!selectedOption}
                className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#47a8a5' }}
              >
                <span className="truncate">Confirmar Resposta</span>
              </button>
            ) : isLastQuestion ? (
              <button
                onClick={handleViewResult}
                disabled={isSaving}
                className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait"
              >
                <span className="truncate">{isSaving ? 'Salvando...' : 'Ver Resultado'}</span>
                {!isSaving && <ArrowRightIcon size={24} />}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="truncate">Próxima Pergunta</span>
                <ArrowRightIcon size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
