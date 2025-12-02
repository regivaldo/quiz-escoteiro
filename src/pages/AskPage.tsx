const AskPage = () => {
    // Mock data - in real app this would come from props/state
    const currentQuestion = 5
    const totalQuestions = 10
    const progress = (currentQuestion / totalQuestions) * 100
    const timeRemaining = '01:30'
    const question = 'Qual é o lema do Ramo Escoteiro?'

    const options = [
        { id: 'A', text: 'Sempre Alerta', state: 'incorrect' },
        { id: 'B', text: 'Servir', state: 'correct' },
        { id: 'C', text: 'Estar Preparado', state: 'default' },
        { id: 'D', text: 'O Melhor Possível', state: 'default' },
    ]

    const getOptionClasses = (state: string) => {
        if (state === 'incorrect') {
            return 'bg-error/20 text-text-on-light ring-2 ring-error'
        }
        if (state === 'correct') {
            return 'bg-primary/20 text-text-on-light ring-2 ring-primary'
        }
        return 'bg-bg-light hover:bg-secondary/20 ring-1 ring-inset ring-black/10 hover:ring-secondary'
    }

    const getOptionIcon = (state: string, id: string) => {
        if (state === 'incorrect') {
            return (
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-error text-white">
                    <span className="material-symbols-outlined text-sm">
                        close
                    </span>
                </div>
            )
        }
        if (state === 'correct') {
            return (
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <span className="material-symbols-outlined text-sm">
                        done
                    </span>
                </div>
            )
        }
        return (
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black/10">
                <span className="text-sm font-bold">{id}</span>
            </div>
        )
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-2xl">
                {/* Header with Progress and Timer */}
                <div className="mb-8 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        {/* Progress Bar */}
                        <div className="flex-grow">
                            <p className="text-sm font-medium text-text-on-light/80 mb-2">
                                Pergunta {currentQuestion} de {totalQuestions}
                            </p>
                            <div className="h-2 w-full rounded-full bg-surface-light shadow-inner">
                                <div
                                    className="h-2 rounded-full bg-primary transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Timer */}
                        <div className="flex items-center gap-2 rounded-lg bg-surface-light p-2 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-xl">
                                timer
                            </span>
                            <p className="text-lg font-bold tracking-tight text-text-on-light">
                                {timeRemaining}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Quiz Card */}
                <div className="flex w-full flex-col items-center rounded-xl bg-surface-light p-6 sm:p-8 shadow-lg">
                    {/* Question */}
                    <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tight text-text-on-light sm:text-3xl">
                        {question}
                    </h1>

                    {/* Answer Options */}
                    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                className={`flex min-w-[84px] cursor-pointer items-center justify-start gap-4 overflow-hidden rounded-lg h-14 px-5 text-base font-bold leading-normal tracking-[0.015em] w-full transition-all ${getOptionClasses(option.state)}`}
                            >
                                {getOptionIcon(option.state, option.id)}
                                <span className="truncate">{option.text}</span>
                            </button>
                        ))}
                    </div>

                    {/* Next Question Button */}
                    <div className="mt-8 flex w-full justify-center">
                        <button className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            <span className="truncate">Próxima Pergunta</span>
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskPage
