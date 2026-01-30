import { UsersThreeIcon, CheckCircleIcon, TrophyIcon } from "@phosphor-icons/react";

const AdminDashboardPage = () => {
    // Mock data for now
    const stats = [
        {
            label: "Usuários Cadastrados",
            value: "148",
            color: "text-blue-600",
            bg: "bg-blue-100",
            icon: <UsersThreeIcon size={32} />
        },
        {
            label: "Quizzes Respondidos",
            value: "1,293",
            color: "text-green-600",
            bg: "bg-green-100",
            icon: <CheckCircleIcon size={32} />
        },
        {
            label: "Grupos Registrados",
            value: "12",
            color: "text-amber-600",
            bg: "bg-amber-100",
            icon: <TrophyIcon size={32} />
        }
    ];

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-gray-500">Visão geral do sistema Quiz Escoteiro.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder for Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Atividade Recente</h3>
                <p className="text-gray-500 italic text-sm">Nenhuma atividade recente registrada nos logs do sistema.</p>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
