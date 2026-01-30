import { db } from "@/config/firebase";
import type { Category } from "@/types/category";
import { PlusIcon, PencilSimpleIcon, TrashIcon, StarIcon } from "@phosphor-icons/react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ConfirmationModal from "@/components/ConfirmationModal";
import { toast } from "react-toastify";

const AdminQuizList = () => {
    const [quizzes, setQuizzes] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [quizToDelete, setQuizToDelete] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "quizzes"));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Category));
                setQuizzes(data);
            } catch (error) {
                console.error("Erro ao buscar quizzes:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    const handleDeleteQuiz = async () => {
        if (!quizToDelete) return;
        try {
            await deleteDoc(doc(db, "quizzes", quizToDelete));
            setQuizzes(prev => prev.filter(q => q.slug !== quizToDelete));
            setQuizToDelete(null);
            toast.success("Quiz excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir quiz:", error);
            toast.error("Erro ao excluir quiz.");
        }
    };

    if (isLoading) return <div className="p-8 text-center">Carregando quizzes...</div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Gerenciar Quizzes</h2>
                    <p className="text-gray-500">Crie, edite ou remova os desafios do sistema.</p>
                </div>
                <Link
                    to="/admin/quizzes/new"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold hover:brightness-90 transition-all cursor-pointer"
                >
                    <PlusIcon size={20} />
                    Criar Novo Quiz
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase">Título</th>
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase">Slug</th>
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase text-center">Destaque</th>
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase text-center">Perguntas</th>
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 uppercase text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {quizzes.map((quiz) => (
                            <tr key={quiz.slug} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900">{quiz.title}</div>
                                    <div className="text-sm text-gray-500 line-clamp-1">{quiz.description}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-mono">
                                        {quiz.slug}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {quiz.highlighted ? (
                                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-500">
                                            <StarIcon size={20} weight="fill" />
                                        </div>
                                    ) : (
                                        <span className="text-gray-300">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="font-bold text-gray-700">{quiz.questions?.length || 0}</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Link
                                        to={`/admin/quizzes/${quiz.slug}`}
                                        className="inline-flex p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                                        title="Editar Quiz"
                                    >
                                        <PencilSimpleIcon size={20} />
                                    </Link>
                                    <button
                                        onClick={() => setQuizToDelete(quiz.slug)}
                                        className="inline-flex p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer ml-2"
                                        title="Excluir Quiz"
                                    >
                                        <TrashIcon size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {quizzes.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                    Nenhum quiz encontrado. Crie o primeiro agora!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <ConfirmationModal
                isOpen={quizToDelete !== null}
                onClose={() => setQuizToDelete(null)}
                onConfirm={handleDeleteQuiz}
                title="Excluir Quiz"
                message="Tem certeza que deseja excluir este quiz? Todas as perguntas e resultados associados podem ser perdidos."
                isDestructive
                confirmText="Excluir"
            />
        </div>
    );
}
export default AdminQuizList;
