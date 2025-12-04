import { useUserStore } from "@/store/userStore";
import { FloppyDiskIcon, MedalMilitaryIcon, PencilSimpleIcon, QuestionMarkIcon, SignOutIcon, StarIcon } from "@phosphor-icons/react"
import { useState } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [edit, showEdit] = useState<boolean>(false);
    const user = useUserStore((state) => state.user);

    const stats = [
        {
            icon: <StarIcon size={24} />,
            label: 'Pontuação Total',
            value: '12,450',
            color: 'primary',
        },
        {
            icon: <QuestionMarkIcon size={24} />,
            label: 'Quizzes Concluídos',
            value: '15',
            color: 'primary',
        },
        {
            icon: <MedalMilitaryIcon size={24} />,
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

    const handleEditProfile = () => {
        showEdit(!edit);
    }

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <main className="flex w-full flex-1 justify-center py-8 md:py-12">
            <div className="flex w-full max-w-4xl flex-col gap-8 px-6">
                {/* Page Heading */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-4xl font-black tracking-tighter text-text">
                        Meu Perfil
                    </h2>
                    <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm font-bold text-red-500 transition-colors hover:bg-red-500/20" onClick={handleLogout}>
                        <SignOutIcon size={24} />
                        Sair
                    </button>
                </div>

                {/* Profile Header */}
                <div className="flex rounded-xl border border-gray-200 bg-white p-6">
                    <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-5">
                            <div
                                className="h-24 w-24 min-w-24 rounded-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${user?.photoURL}')`,
                                }}
                                aria-label="Avatar do usuário"
                            />
                            <div className="flex flex-col">
                                <p className={`text-2xl font-bold text-text ${edit ? 'border border-primary' : ''}`} contentEditable={edit}>
                                    {user?.name}
                                </p>
                                <p className={`text-sm text-gray-500 ${edit ? 'border border-primary' : ''}`} contentEditable={edit}>
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90" onClick={handleEditProfile}>
                            {edit ? (
                                <>
                                    <FloppyDiskIcon size={24} />
                                    Salvar
                                </>
                            ) : (
                                <>
                                    <PencilSimpleIcon size={24} />
                                    Editar Perfil
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Section Header for Stats */}
                <h3 className="text-2xl font-bold tracking-tight text-text">
                    Minhas Estatísticas
                </h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6"
                        >
                            <div className="flex items-center gap-2 text-gray-600">
                                <span
                                    className={`text-${stat.color} text-xl`}
                                >
                                    {stat.icon}
                                </span>
                                <p className="text-base font-medium">
                                    {stat.label}
                                </p>
                            </div>
                            <p className="text-3xl font-bold text-text">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Section Header for History */}
                <h3 className="text-2xl font-bold tracking-tight text-text">
                    Histórico de Quizzes
                </h3>

                {/* History Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        className="px-6 py-3 text-left font-medium text-gray-500"
                                        scope="col"
                                    >
                                        Nome do Quiz
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left font-medium text-gray-500"
                                        scope="col"
                                    >
                                        Pontuação
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left font-medium text-gray-500"
                                        scope="col"
                                    >
                                        Data
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {quizHistory.map((quiz, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-text">
                                            {quiz.name}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700">
                                            {quiz.score}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700">
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
