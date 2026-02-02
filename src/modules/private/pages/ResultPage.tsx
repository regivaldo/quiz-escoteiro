import { ArrowClockwiseIcon, CheckCircleIcon, EyeIcon, HouseIcon, ShareNetworkIcon, XCircleIcon } from "@phosphor-icons/react"
import { Link, useLocation, useNavigate } from "react-router"
import { useEffect, useMemo } from "react"

const ResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const result = location.state?.result;

    // Redirect if direct access without result
    useEffect(() => {
        if (!result) {
            navigate('/game');
        }
    }, [result, navigate]);

    if (!result) return null;

    const { totalPoints, correctAnswers, wrongAnswers: incorrectAnswers } = result;

    const message = useMemo(() => {
        const totalQuestions = correctAnswers + incorrectAnswers;
        const accuracy = correctAnswers / totalQuestions;

        if (accuracy === 1) return 'Perfeito! Você é um mestre escoteiro!';
        if (accuracy >= 0.8) return 'Parabéns! Você demonstrou um ótimo conhecimento escoteiro!';
        if (accuracy >= 0.5) return 'Muito bem! Continue estudando para melhorar ainda mais.';
        return 'Continue praticando! O conhecimento vem com o tempo.';
    }, [correctAnswers, incorrectAnswers]);

    const playAgain = () => {
        navigate(result.quizSlug && result.quizSlug !== 'unknown' ? `/game/quiz/${result.quizSlug}` : '/game');
    }

    const shareResult = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Quiz Escoteiro',
                text: `Fiz ${totalPoints} pontos no Quiz Escoteiro! Você consegue me superar?`,
                url: window.location.origin
            }).catch(console.error);
        } else {
            console.log('Share API not supported');
        }
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl px-4 py-8">
                {/* Header */}
                <div className="text-center">
                    <span className="text-6xl">🏆</span>
                    <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#1c1e14] md:text-4xl">
                        Resultados Finais do Quiz Escoteiro
                    </h1>
                </div>

                {/* Results Card */}
                <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-lg">
                    {/* Score Section */}
                    <div className="p-6 text-center sm:p-8">
                        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                            Sua Pontuação Final
                        </p>
                        <div className="mt-4 flex items-baseline justify-center gap-2">
                            <span className="text-7xl font-bold tracking-tighter text-primary">
                                {totalPoints}
                            </span>
                            <span className="text-2xl font-semibold text-gray-400">
                                pontos
                            </span>
                        </div>
                        <p className="mt-4 text-lg text-gray-600">
                            {message}
                        </p>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2">
                        {/* Correct Answers */}
                        <div className="flex flex-col items-center gap-2 border-b p-6 sm:border-b-0 sm:border-r">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <CheckCircleIcon size={32} weight="fill" />
                            </div>
                            <p className="text-sm text-gray-500">
                                Respostas Corretas
                            </p>
                            <p className="text-2xl font-semibold text-[#1c1e14]">
                                {correctAnswers}
                            </p>
                        </div>

                        {/* Incorrect Answers */}
                        <div className="flex flex-col items-center gap-2 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                                <XCircleIcon size={32} weight="fill" />
                            </div>
                            <p className="text-sm text-gray-500">
                                Respostas Incorretas
                            </p>
                            <p className="text-2xl font-semibold text-[#1c1e14]">
                                {incorrectAnswers}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                    {/* Play Again */}
                    <button className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-[#1c1e14] shadow-md transition-transform hover:scale-105 active:scale-100 sm:w-auto" onClick={playAgain}>
                        <ArrowClockwiseIcon size={24} />
                        <span className="truncate">Jogar Novamente</span>
                    </button>

                    {/* Share */}
                    <button className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-secondary px-6 text-base font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-100 sm:w-auto" onClick={shareResult}>
                        <ShareNetworkIcon size={24} />
                        <span className="truncate">Compartilhar Resultado</span>
                    </button>

                    {/* View Answers */}
                    <Link to="/game/respostas" className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-gray-200 px-6 text-base font-bold text-gray-800 transition-colors hover:bg-gray-300 sm:w-auto">
                        <EyeIcon size={24} />
                        <span className="truncate">Ver Respostas</span>
                    </Link>

                    {/* Back to Home */}
                    <Link to="/game" className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-gray-300 bg-transparent px-6 text-base font-bold text-gray-700 transition-colors hover:bg-gray-100 sm:w-auto">
                        <HouseIcon size={24} />
                        <span className="truncate">Voltar para o Início</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResultPage
