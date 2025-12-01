const ProfilePage = () => {
    // Mock data - in real app this would come from props/state/API
    const user = {
        name: 'Usuário Escoteiro',
        email: 'usuario@email.com',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9tZfAFDSWsTBHBraVw-rr97TTIGOdIaNwNoXojAEbqC64bOr0OtNVLSOBrU4BvF1aaEW-xMk4bWDbezaaOfXktyFuC1xDHqLXkJj-_NKY1In4jSQFXlHgmuyAMTrFPuGIZu1vb6AfHMauCC6Lm80K8QDRL8tCVbxA80C_176weZhm92zIhdAHD1IO0nzkUJJDqpw0RJtr1ooTjJ97Sy0hDgn-IzJUu1VRGJbVqIKj9ZKyvffEkzlzujTacBLkCbwi7n-cAsCsVtaC',
    }

    const stats = [
        {
            icon: 'star',
            label: 'Pontuação Total',
            value: '12,450',
            color: 'primary',
        },
        {
            icon: 'quiz',
            label: 'Quizzes Concluídos',
            value: '15',
            color: 'primary',
        },
        {
            icon: 'workspace_premium',
            label: 'Conquistas',
            value: '8',
            color: 'primary',
        },
    ]

    const quizHistory = [
        { name: 'Especialidade de Nós', score: 850, date: '15 de Julho, 2024' },
        {
            name: 'História do Escotismo',
            score: 920,
            date: '12 de Julho, 2024',
        },
        { name: 'Primeiros Socorros', score: 780, date: '10 de Julho, 2024' },
        { name: 'Leis e Promessas', score: 1000, date: '05 de Julho, 2024' },
    ]

    return (
        <main className="flex w-full flex-1 justify-center py-8 md:py-12">
            <div className="flex w-full max-w-4xl flex-col gap-8 px-6">
                {/* Page Heading */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-4xl font-black tracking-tighter text-text-on-light dark:text-text-on-dark">
                        Meu Perfil
                    </h2>
                    <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm font-bold text-red-500 transition-colors hover:bg-red-500/20 dark:bg-red-400/20 dark:text-red-400 dark:hover:bg-red-400/30">
                        <span className="material-symbols-outlined text-base">
                            logout
                        </span>
                        Sair
                    </button>
                </div>

                {/* Profile Header */}
                <div className="flex rounded-xl border border-gray-200 bg-white p-6 dark:border-border-dark dark:bg-surface-dark">
                    <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-5">
                            <div
                                className="h-24 w-24 min-w-24 rounded-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${user.avatar}')`,
                                }}
                                aria-label="Avatar do usuário"
                            />
                            <div className="flex flex-col">
                                <p className="text-2xl font-bold text-text-on-light dark:text-text-on-dark">
                                    {user.name}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                            <span className="material-symbols-outlined text-base">
                                edit
                            </span>
                            <span className="truncate">Editar Perfil</span>
                        </button>
                    </div>
                </div>

                {/* Section Header for Stats */}
                <h3 className="text-2xl font-bold tracking-tight text-text-on-light dark:text-text-on-dark">
                    Minhas Estatísticas
                </h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 dark:border-border-dark dark:bg-surface-dark"
                        >
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span
                                    className={`material-symbols-outlined text-${stat.color} text-xl`}
                                >
                                    {stat.icon}
                                </span>
                                <p className="text-base font-medium">
                                    {stat.label}
                                </p>
                            </div>
                            <p className="text-3xl font-bold text-text-on-light dark:text-text-on-dark">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Section Header for History */}
                <h3 className="text-2xl font-bold tracking-tight text-text-on-light dark:text-text-on-dark">
                    Histórico de Quizzes
                </h3>

                {/* History Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-border-dark dark:bg-surface-dark">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm dark:divide-border-dark">
                            <thead className="bg-gray-50 dark:bg-white/5">
                                <tr>
                                    <th
                                        className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400"
                                        scope="col"
                                    >
                                        Nome do Quiz
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400"
                                        scope="col"
                                    >
                                        Pontuação
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400"
                                        scope="col"
                                    >
                                        Data
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-border-dark">
                                {quizHistory.map((quiz, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-text-on-light dark:text-text-on-dark">
                                            {quiz.name}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700 dark:text-gray-300">
                                            {quiz.score}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700 dark:text-gray-300">
                                            {quiz.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProfilePage
