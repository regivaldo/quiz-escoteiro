import { db } from "@/config/firebase";
import { UsersThreeIcon, CheckCircleIcon, TrophyIcon } from "@phosphor-icons/react";
import { collection, getCountFromServer, getDocs, query, collectionGroup } from "firebase/firestore";
import { useEffect, useState } from "react";

const AdminDashboardPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [statsData, setStatsData] = useState({
        totalUsers: 0,
        totalQuizzesResponded: 0,
        totalGroups: 0
    });

    useEffect(() => {
        const fetchDashboardData = async () => {
            setIsLoading(true);
            try {
                // 1. Total Users
                const usersCollection = collection(db, "users");
                const usersSnapshot = await getCountFromServer(usersCollection);
                const totalUsers = usersSnapshot.data().count;

                // 2. Total Groups (requires fetching all users unfortunately, user count is usually higher than retrieval limit so be careful)
                // For a scalable solution, we'd paginate or use an aggregation function/counter. 
                // Here we fetch all (assuming < 1000 users for now as per "small" app context).
                const allUsersSnapshot = await getDocs(usersCollection);
                const groupsSet = new Set<string>();
                allUsersSnapshot.docs.forEach(doc => {
                    const data = doc.data();
                    if (data.group && typeof data.group === 'string' && data.group.trim() !== "") {
                        groupsSet.add(data.group.trim());
                    }
                });
                const totalGroups = groupsSet.size;

                // 3. Total Quizzes Responded (using collectionGroup to count all 'quiz_history' docs across all users)
                const historyQuery = query(collectionGroup(db, 'quiz_history'));
                const historyCountSnapshot = await getCountFromServer(historyQuery);
                const totalQuizzesResponded = historyCountSnapshot.data().count;

                setStatsData({
                    totalUsers,
                    totalQuizzesResponded,
                    totalGroups
                });

            } catch (error) {
                console.error("Error fetching dashboard stats:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const stats = [
        {
            label: "Usuários Cadastrados",
            value: isLoading ? "-" : statsData.totalUsers.toString(),
            color: "text-blue-600",
            bg: "bg-blue-100",
            icon: <UsersThreeIcon size={32} />
        },
        {
            label: "Quizzes Respondidos",
            value: isLoading ? "-" : statsData.totalQuizzesResponded.toString(),
            color: "text-green-600",
            bg: "bg-green-100",
            icon: <CheckCircleIcon size={32} />
        },
        {
            label: "Grupos Registrados",
            value: isLoading ? "-" : statsData.totalGroups.toString(),
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
                            <h3 className="text-2xl font-bold text-gray-900">
                                {isLoading ? (
                                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>
                                ) : (
                                    stat.value
                                )}
                            </h3>
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
