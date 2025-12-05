import { ArrowRightIcon } from "@phosphor-icons/react"
import OptionIcon from "../components/OptionIcon"
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";

const AskPage = () => {
    // Mock data - in real app this would come from props/state
    const currentQuestion = 2
    const totalQuestions = 10
    const question = 'Qual é o lema do Ramo Escoteiro?'

    const options = [
        { id: 'A', text: 'Sempre Alerta', state: 'incorrect' },
        { id: 'B', text: 'Servir', state: 'correct' },
        { id: 'C', text: 'Estar Preparado', state: 'default' },
        { id: 'D', text: 'O Melhor Possível', state: 'default' },
    ]

    const getOptionClasses = (state: string) => {
        if (state === 'incorrect') {
            return 'bg-error/20 text-text ring-2 ring-error'
        }
        if (state === 'correct') {
            return 'bg-primary/20 text-text ring-2 ring-primary'
        }
        return 'bg-surface hover:bg-secondary/20 ring-1 ring-inset ring-black/10 hover:ring-secondary'
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-2xl">
                {/* Header with Progress and Timer */}
                <div className="mb-8 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
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
                        {options.map((option) => (
                            <button
                                key={option.id}
                                className={`flex min-w-[84px] cursor-pointer items-center justify-start gap-4 overflow-hidden rounded-lg h-14 px-5 text-base font-bold leading-normal tracking-[0.015em] w-full transition-all ${getOptionClasses(option.state)}`}
                            >
                                <OptionIcon state={option.state} id={option.id} />
                                <span className="truncate">{option.text}</span>
                            </button>
                        ))}
                    </div>

                    {/* Next Question Button */}
                    <div className="mt-8 flex w-full justify-center">
                        <button className="flex min-w-[84px] w-full max-w-xs cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            <span className="truncate">Próxima Pergunta</span>
                            <ArrowRightIcon size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskPage
