import { auth, db } from "@/config/firebase";
import { useUserStore } from "@/stores/userStore";
import { QuestionMarkIcon, SignOutIcon, StarIcon } from "@phosphor-icons/react"
import { signOut } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
    const navigate = useNavigate();
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);
    const [quizHistory, setQuizHistory] = useState<any[]>([]);

    useEffect(() => {
        const fetchHistory = async () => {
            if (!user) return;
            try {
                const historyRef = collection(db, "users", user.id, "quiz_history");
                const q = query(historyRef, orderBy("respondedAt", "desc"));
                const querySnapshot = await getDocs(q);

                const historyData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        name: data.quizTitle || data.quizSlug || 'Quiz Sem Nome',
                        score: Number(data.totalPoints) || 0,
                        date: data.respondedAt?.toDate().toLocaleDateString('pt-BR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        }) || 'Data desconhecida'
                    };
                });

                setQuizHistory(historyData);
            } catch (error) {
                console.error("Error fetching quiz history:", error);
            }
        };

        fetchHistory();
    }, [user]);

    const stats = [
        {
            icon: <StarIcon size={24} />,
            label: 'Pontuação Total',
            value: quizHistory.reduce((acc, curr) => acc + curr.score, 0).toLocaleString('pt-BR'),
            color: 'primary',
        },
        {
            icon: <QuestionMarkIcon size={24} />,
            label: 'Quizzes Concluídos',
            value: quizHistory.length.toString(),
            color: 'primary',
        }
    ]

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/');
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error("Logout error:", message);
        }
    }

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-4xl font-black tracking-tighter text-text">
                        Meu Perfil
                    </h2>
                    <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm font-bold text-red-500 transition-colors hover:bg-red-500/20" onClick={handleLogout}>
                        <SignOutIcon size={24} /> Sair
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
                                <p className={`text-2xl font-bold text-text`}>
                                    {user?.name}
                                </p>
                                <p className={`text-sm text-gray-500`}>
                                    {user?.email}
                                </p>
                                <p className={`text-sm text-gray-500`}>
                                    {user?.group} - {user?.numeral}/{user?.state}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Header for Stats */}
                <h3 className="text-2xl font-bold tracking-tight text-text">
                    Minhas Estatísticas
                </h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6"
                        >
                            <div className="flex items-center gap-2 text-gray-600">
                                <span className={`text-${stat.color} text-xl`}>
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
                                {quizHistory.length > 0 ? (
                                    quizHistory.map((quiz) => (
                                        <tr key={quiz.id}>
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
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                                            Nenhum quiz realizado ainda.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProfilePage
