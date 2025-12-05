interface ProgressBarProps {
    currentQuestion: number
    totalQuestions: number
}

const ProgressBar = ({ currentQuestion, totalQuestions }: ProgressBarProps) => {
    const progress = (currentQuestion / totalQuestions) * 100

    return (
        <div className="flex-grow">
            <p className="text-sm font-medium text-text/80 mb-2">
                Pergunta {currentQuestion} de {totalQuestions}
            </p>
            <div className="h-2 w-full rounded-full bg-surface-subtle shadow-inner">
                <div
                    className="h-2 rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}

export default ProgressBar