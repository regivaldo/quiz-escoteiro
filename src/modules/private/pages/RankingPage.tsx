import { UserIcon } from "@phosphor-icons/react"

const RankingPage = () => {
    // Mock data - in real app this would come from props/state/API
    const rankings = [
        {
            position: 1,
            name: '🥇 Ana Silva',
            group: 'G.E. Tuiuti',
            score: 12500,
            highlight: 'primary',
        },
        {
            position: 2,
            name: '🥈 Bruno Costa',
            group: 'G.E. Acauã',
            score: 11800,
            highlight: 'secondary',
        },
        {
            position: 3,
            name: '🥉 Carla Dias',
            group: 'G.E. Falcão Peregrino',
            score: 11250,
            highlight: 'secondary-light',
        },
        {
            position: 4,
            name: 'Daniel Martins',
            group: 'G.E. Tuiuti',
            score: 10900,
        },
        {
            position: 5,
            name: 'Eduarda Lima',
            group: 'G.E. Acauã',
            score: 10500,
        },
        {
            position: 6,
            name: 'Felipe Almeida',
            group: 'G.E. Falcão Peregrino',
            score: 10100,
        },
        {
            position: 7,
            name: 'Gabriela Borges',
            group: 'G.E. Tuiuti',
            score: 9800,
        },
    ]

    const userPosition = { rank: 42, score: 5300 }

    const getRowClasses = (highlight?: string) => {
        if (highlight === 'primary') {
            return 'border-b border-border bg-[#9EB83B]/20 font-bold text-text'
        }
        if (highlight === 'secondary') {
            return 'border-b border-border bg-[#47A8A5]/20 font-semibold text-text'
        }
        if (highlight === 'secondary-light') {
            return 'border-b border-border bg-[#47A8A5]/10 font-semibold text-text'
        }
        return 'border-b border-border hover:bg-surface-subtle transition-colors'
    }

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
                {/* Page Header */}
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-3xl font-black tracking-tighter sm:text-4xl text-text">
                            Ranking do Quiz
                        </p>
                        <p className="text-text-muted text-base font-normal">
                            Veja os melhores jogadores e sua posição
                        </p>
                    </div>
                </div>

                {/* Period Filter Tabs */}
                <div>
                    <div className="flex h-12 w-full max-w-xl items-center justify-center rounded-lg bg-surface-subtle p-1">
                        <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
                            <span className="truncate">Diário</span>
                            <input
                                className="sr-only"
                                name="ranking-period"
                                type="radio"
                                value="Diário"
                            />
                        </label>
                        <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
                            <span className="truncate">Semanal</span>
                            <input
                                className="sr-only"
                                name="ranking-period"
                                type="radio"
                                value="Semanal"
                            />
                        </label>
                        <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
                            <span className="truncate">Geral</span>
                            <input
                                className="sr-only"
                                name="ranking-period"
                                type="radio"
                                value="Geral"
                                defaultChecked
                            />
                        </label>
                        <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
                            <span className="truncate">
                                Meu grupo escoteiro
                            </span>
                            <input
                                className="sr-only"
                                name="ranking-period"
                                type="radio"
                                value="Meu grupo escoteiro"
                            />
                        </label>
                    </div>
                </div>

                {/* Ranking Table */}
                <div>
                    <div className="flex overflow-hidden rounded-xl border border-border bg-surface">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border bg-surface-subtle/50">
                                    <th className="px-6 py-4 text-left w-24 text-sm font-semibold tracking-wider text-text">
                                        Posição
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-text">
                                        Jogador
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-text">
                                        Grupo Escoteiro
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold tracking-wider text-text">
                                        Pontuação
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankings.map((player) => (
                                    <tr
                                        key={player.position}
                                        className={getRowClasses(
                                            player.highlight
                                        )}
                                    >
                                        <td
                                            className={`h-[72px] px-6 py-2 ${player.position === 1 ? 'text-lg' : ''} ${!player.highlight ? 'text-text-muted' : ''}`}
                                        >
                                            {player.position}
                                        </td>
                                        <td
                                            className={`h-[72px] px-6 py-2 ${player.position === 1 ? 'text-base' : ''}`}
                                        >
                                            {player.name}
                                        </td>
                                        <td
                                            className={`h-[72px] px-6 py-2 ${player.position === 1 ? 'text-base' : ''}`}
                                        >
                                            {player.group}
                                        </td>
                                        <td
                                            className={`h-[72px] px-6 py-2 text-right ${player.position === 1 ? 'text-base' : ''} ${!player.highlight ? 'text-text-muted' : ''}`}
                                        >
                                            {player.score.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* User Position Card */}
                <div>
                    <div className="flex items-center gap-4 rounded-lg bg-surface-subtle px-6 min-h-16 justify-between border border-border">
                        <div className="flex items-center gap-4">
                            <UserIcon size={24} />
                            <p className="text-base font-medium flex-1 truncate text-text">
                                Sua Posição
                            </p>
                        </div>
                        <div className="shrink-0">
                            <p className="text-base font-semibold text-text">
                                #{userPosition.rank} -{' '}
                                {userPosition.score.toLocaleString()}{' '}
                                Pontos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RankingPage
