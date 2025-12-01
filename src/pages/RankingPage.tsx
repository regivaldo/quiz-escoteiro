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
            return 'border-b border-border-light dark:border-border-dark bg-[#9EB83B]/20 dark:bg-[#9EB83B]/10 font-bold text-text-on-light dark:text-text-on-dark'
        }
        if (highlight === 'secondary') {
            return 'border-b border-border-light dark:border-border-dark bg-[#47A8A5]/20 dark:bg-[#47A8A5]/10 font-semibold text-text-on-light dark:text-text-on-dark'
        }
        if (highlight === 'secondary-light') {
            return 'border-b border-border-light dark:border-border-dark bg-[#47A8A5]/10 dark:bg-[#47A8A5]/5 font-semibold text-text-on-light dark:text-text-on-dark'
        }
        return 'border-b border-border-light dark:border-border-dark hover:bg-surface-light-subtle dark:hover:bg-surface-dark transition-colors'
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <div className="flex h-full grow flex-col">
                <div className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
                    <div className="flex w-full max-w-5xl flex-col gap-6">
                        {/* Page Header */}
                        <div className="flex flex-wrap items-end justify-between gap-4 px-4 py-2 md:px-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-3xl font-black tracking-tighter sm:text-4xl text-text-on-light dark:text-text-on-dark">
                                    Ranking do Quiz
                                </p>
                                <p className="text-text-on-light/70 dark:text-text-on-dark/70 text-base font-normal">
                                    Veja os melhores jogadores e sua posição
                                </p>
                            </div>
                        </div>

                        {/* Period Filter Tabs */}
                        <div className="px-4 md:px-6">
                            <div className="flex h-12 w-full max-w-xl items-center justify-center rounded-lg bg-surface-light-subtle dark:bg-surface-dark p-1">
                                <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-bg-light dark:has-[:checked]:bg-bg-dark has-[:checked]:shadow-sm has-[:checked]:text-text-on-light dark:has-[:checked]:text-text-on-dark text-text-on-light/70 dark:text-text-on-dark/70 text-sm font-medium transition-colors">
                                    <span className="truncate">Diário</span>
                                    <input
                                        className="sr-only"
                                        name="ranking-period"
                                        type="radio"
                                        value="Diário"
                                    />
                                </label>
                                <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-bg-light dark:has-[:checked]:bg-bg-dark has-[:checked]:shadow-sm has-[:checked]:text-text-on-light dark:has-[:checked]:text-text-on-dark text-text-on-light/70 dark:text-text-on-dark/70 text-sm font-medium transition-colors">
                                    <span className="truncate">Semanal</span>
                                    <input
                                        className="sr-only"
                                        name="ranking-period"
                                        type="radio"
                                        value="Semanal"
                                    />
                                </label>
                                <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-bg-light dark:has-[:checked]:bg-bg-dark has-[:checked]:shadow-sm has-[:checked]:text-text-on-light dark:has-[:checked]:text-text-on-dark text-text-on-light/70 dark:text-text-on-dark/70 text-sm font-medium transition-colors">
                                    <span className="truncate">Geral</span>
                                    <input
                                        className="sr-only"
                                        name="ranking-period"
                                        type="radio"
                                        value="Geral"
                                        defaultChecked
                                    />
                                </label>
                                <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-bg-light dark:has-[:checked]:bg-bg-dark has-[:checked]:shadow-sm has-[:checked]:text-text-on-light dark:has-[:checked]:text-text-on-dark text-text-on-light/70 dark:text-text-on-dark/70 text-sm font-medium transition-colors">
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
                        <div className="px-4 py-3 md:px-6">
                            <div className="flex overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-border-light dark:border-border-dark bg-surface-light-subtle/50 dark:bg-surface-dark/50">
                                            <th className="px-6 py-4 text-left w-24 text-sm font-semibold tracking-wider text-text-on-light dark:text-text-on-dark">
                                                Posição
                                            </th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-text-on-light dark:text-text-on-dark">
                                                Jogador
                                            </th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-text-on-light dark:text-text-on-dark">
                                                Grupo Escoteiro
                                            </th>
                                            <th className="px-6 py-4 text-right text-sm font-semibold tracking-wider text-text-on-light dark:text-text-on-dark">
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
                                                    className={`h-[72px] px-6 py-2 ${player.position === 1 ? 'text-lg' : ''} ${!player.highlight ? 'text-text-on-light/70 dark:text-text-on-dark/70' : ''}`}
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
                                                    className={`h-[72px] px-6 py-2 text-right ${player.position === 1 ? 'text-base' : ''} ${!player.highlight ? 'text-text-on-light/70 dark:text-text-on-dark/70' : ''}`}
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
                        <div className="px-4 py-3 md:px-6">
                            <div className="flex items-center gap-4 rounded-lg bg-surface-light-subtle dark:bg-surface-dark px-6 min-h-16 justify-between border border-border-light dark:border-border-dark">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-text-on-light/80 dark:text-text-on-dark/80">
                                        person
                                    </span>
                                    <p className="text-base font-medium flex-1 truncate text-text-on-light dark:text-text-on-dark">
                                        Sua Posição
                                    </p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-base font-semibold text-text-on-light dark:text-text-on-dark">
                                        #{userPosition.rank} -{' '}
                                        {userPosition.score.toLocaleString()}{' '}
                                        Pontos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RankingPage
