import { db } from "@/config/firebase";
import { useUserStore } from "@/stores/userStore";
import type { UserType } from "@/types/user";
import { CaretLeftIcon, CaretRightIcon, UsersIcon, TrashIcon } from "@phosphor-icons/react";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    startAfter,
    getCountFromServer,
    type QueryDocumentSnapshot,
    type DocumentData,
    endBefore,
    limitToLast,
    writeBatch
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "@/components/ConfirmationModal";

interface UserWithStats extends UserType {
    quizzesCompleted: number;
}

const PAGE_SIZE = 50;

const AdminUsersPage = () => {
    const [users, setUsers] = useState<UserWithStats[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
    const [firstVisible, setFirstVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
    const [page, setPage] = useState(1);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);
    const [userToClear, setUserToClear] = useState<UserWithStats | null>(null);

    // Get current logged-in user to highlight
    const { user: currentUser } = useUserStore();

    const fetchUsers = async (direction: 'next' | 'prev' | 'initial' = 'initial') => {
        setIsLoading(true);
        try {
            const usersRef = collection(db, "users");
            let q;

            if (direction === 'next' && lastVisible) {
                q = query(usersRef, orderBy("name"), startAfter(lastVisible), limit(PAGE_SIZE));
            } else if (direction === 'prev' && firstVisible) {
                q = query(usersRef, orderBy("name"), endBefore(firstVisible), limitToLast(PAGE_SIZE));
            } else {
                q = query(usersRef, orderBy("name"), limit(PAGE_SIZE));
            }

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                if (direction === 'next') setIsNextPageAvailable(false);
                setIsLoading(false);
                return;
            }

            const newFirstVisible = querySnapshot.docs[0];
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

            setFirstVisible(newFirstVisible);
            setLastVisible(newLastVisible);

            // Check if there are more users for the next page
            // We fetch one more than needed or just assume if we got full page size
            setIsNextPageAvailable(querySnapshot.docs.length === PAGE_SIZE);

            const usersData: UserWithStats[] = await Promise.all(
                querySnapshot.docs.map(async (doc) => {
                    const userData = doc.data() as UserType;
                    const quizzesCountSnapshot = await getCountFromServer(
                        collection(db, "users", doc.id, "quiz_history")
                    );

                    return {
                        ...userData,
                        id: doc.id,
                        quizzesCompleted: quizzesCountSnapshot.data().count
                    };
                })
            );

            console.log("Fetched Users Data:", usersData);
            setUsers(usersData);

            if (direction === 'next') setPage(prev => prev + 1);
            else if (direction === 'prev') setPage(prev => Math.max(1, prev - 1));
            else setPage(1);

        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            // Ignore permission errors if they happen during initial load before auth settles, 
            // but show others. However, we simply show a generic error.
            toast.error("Erro ao carregar lista de usuários.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearHistory = async () => {
        if (!userToClear) return;

        try {
            const batch = writeBatch(db);
            const historyRef = collection(db, "users", userToClear.id, "quiz_history");
            const snapshot = await getDocs(historyRef);

            if (snapshot.empty) {
                toast.info("Este usuário não tem histórico para limpar.");
                return;
            }

            snapshot.docs.forEach((doc) => {
                batch.delete(doc.ref);
            });

            await batch.commit();

            // Update local state
            setUsers(prev => prev.map(u =>
                u.id === userToClear.id
                    ? { ...u, quizzesCompleted: 0 }
                    : u
            ));

            toast.success(`Histórico de ${userToClear.name} limpo com sucesso!`);
        } catch (error) {
            console.error("Erro ao limpar histórico:", error);
            toast.error("Erro ao limpar histórico do usuário.");
        } finally {
            setUserToClear(null);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleNextPage = () => {
        if (isNextPageAvailable) fetchUsers('next');
    };

    const handlePrevPage = () => {
        if (page > 1) fetchUsers('prev');
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Gerenciar Usuários</h2>
                    <p className="text-gray-500">Lista de todos os usuários cadastrados no sistema.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase">Nome / Email</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase">Grupo Escoteiro</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase">Numeral</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase">Cidade / UF</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase text-center">Quizzes Concluídos</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        <div className="flex justify-center items-center gap-2">
                                            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                            Carregando usuários...
                                        </div>
                                    </td>
                                </tr>
                            ) : users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-8 h-8 rounded-full bg-cover bg-center bg-gray-200 flex-shrink-0 ${currentUser?.id === user.id ? 'ring-2 ring-yellow-400' : ''}`}
                                                    style={{ backgroundImage: user.photoURL ? `url('${user.photoURL}')` : undefined }}
                                                >
                                                    {!user.photoURL && <UsersIcon className="w-full h-full p-1.5 text-gray-400" />}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900">{user.name}</div>
                                                    <div className="text-sm text-gray-500">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-700">{user.group || '-'}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-700">{user.numeral || '-'}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-gray-900">{user.city || '-'}</div>
                                            <div className="text-sm text-gray-500">{user.state || '-'}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                {user.quizzesCompleted}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => setUserToClear(user)}
                                                className="inline-flex items-center justify-center p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                                title="Limpar Histórico de Quizzes"
                                            >
                                                <TrashIcon size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <p>Nenhum usuário encontrado.</p>
                                            <button
                                                onClick={() => fetchUsers()}
                                                className="text-primary hover:underline text-sm font-bold cursor-pointer"
                                            >
                                                Tentar Novamente
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
                    <div className="text-sm text-gray-500">
                        Página <span className="font-medium text-gray-900">{page}</span>
                        {/* We don't know total pages without a total count query, which is expensive */}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrevPage}
                            disabled={page === 1 || isLoading}
                            className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                            <CaretLeftIcon size={16} />
                            Anterior
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={!isNextPageAvailable || isLoading || users.length < PAGE_SIZE}
                            className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                            Próxima
                            <CaretRightIcon size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <ConfirmationModal
                isOpen={userToClear !== null}
                onClose={() => setUserToClear(null)}
                onConfirm={handleClearHistory}
                title="Limpar Histórico"
                message={`Tem certeza que deseja limpar todo o histórico de quizzes de ${userToClear?.name}? Esta ação não pode ser desfeita.`}
                isDestructive
                confirmText="Limpar"
                cancelText="Cancelar"
            />
        </div>
    );
};

export default AdminUsersPage;
