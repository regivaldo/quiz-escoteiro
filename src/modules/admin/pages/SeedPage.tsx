
import { db } from "@/config/firebase";
import type { Category } from "@/types/category";
import { writeBatch, doc, collection, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/userStore";
import { useNavigate } from "react-router";

const quizzes: Category[] = [
    {
        slug: "especialidade-de-nos",
        title: "Especialidade de Nós",
        description: "Domine a arte da marinharia e estruturas com nós essenciais.",
        color: "primary",
        highlighted: true,
        questions: [
            {
                id: "q1",
                question: "Qual nó é utilizado para unir duas cordas de diâmetros diferentes?",
                options: [
                    { id: "A", text: "Nó Direito", isCorrect: false },
                    { id: "B", text: "Nó de Escota", isCorrect: true },
                    { id: "C", text: "Nó de Pescador", isCorrect: false },
                    { id: "D", text: "Nó Lais de Guia", isCorrect: false }
                ]
            },
            {
                id: "q2",
                question: "Qual nó é conhecido por não correr e nem apertar demais sob tensão?",
                options: [
                    { id: "A", text: "Volta do Fiel", isCorrect: false },
                    { id: "B", text: "Nó de Correr", isCorrect: false },
                    { id: "C", text: "Nó Lais de Guia", isCorrect: true },
                    { id: "D", text: "Nó 8", isCorrect: false }
                ]
            },
            {
                id: "q3",
                question: "O Nó Direito é utilizado principalmente para:",
                options: [
                    { id: "A", text: "Unir cordas de mesma espessura", isCorrect: true },
                    { id: "B", text: "Iniciar amarras", isCorrect: false },
                    { id: "C", text: "Encurtar cabos", isCorrect: false },
                    { id: "D", text: "Descer de rapel", isCorrect: false }
                ]
            }
        ]
    },
    {
        slug: "historia-do-escotismo",
        title: "História do Escotismo",
        description: "Viaje no tempo e descubra as origens do movimento.",
        color: "secondary",
        highlighted: true,
        questions: [
            {
                id: "q1",
                question: "Quem foi o fundador do Escotismo?",
                options: [
                    { id: "A", text: "Caio Vianna Martins", isCorrect: false },
                    { id: "B", text: "Robert Baden-Powell", isCorrect: true },
                    { id: "C", text: "Dom Pedro II", isCorrect: false },
                    { id: "D", text: "Bear Grylls", isCorrect: false }
                ]
            },
            {
                id: "q2",
                question: "Em que ilha ocorreu o primeiro acampamento escoteiro?",
                options: [
                    { id: "A", text: "Ilha de Brownsea", isCorrect: true },
                    { id: "B", text: "Ilha de Man", isCorrect: false },
                    { id: "C", text: "Ilha do Mel", isCorrect: false },
                    { id: "D", text: "Ilha Grande", isCorrect: false }
                ]
            },
            {
                id: "q3",
                question: "Qual o ano de fundação do Movimento Escoteiro?",
                options: [
                    { id: "A", text: "1900", isCorrect: false },
                    { id: "B", text: "1910", isCorrect: false },
                    { id: "C", text: "1907", isCorrect: true },
                    { id: "D", text: "1899", isCorrect: false }
                ]
            }
        ]
    },
    {
        slug: "primeiros-socorros",
        title: "Primeiros Socorros",
        description: "Esteja Sempre Alerta para salvar vidas em emergências.",
        color: "primary",
        highlighted: false,
        questions: [
            {
                id: "q1",
                question: "Qual o procedimento para estancar uma hemorragia externa?",
                options: [
                    { id: "A", text: "Aplicar torniquete imediatamente", isCorrect: false },
                    { id: "B", text: "Compressão direta sobre o ferimento", isCorrect: true },
                    { id: "C", text: "Lavar com água quente", isCorrect: false },
                    { id: "D", text: "Oferecer água à vítima", isCorrect: false }
                ]
            },
            {
                id: "q2",
                question: "Em caso de queimadura de 1º grau, o que fazer?",
                options: [
                    { id: "A", text: "Passar pasta de dente", isCorrect: false },
                    { id: "B", text: "Estourar as bolhas", isCorrect: false },
                    { id: "C", text: "Resfriar com água corrente fria", isCorrect: true },
                    { id: "D", text: "Cobrir com pano seco", isCorrect: false }
                ]
            }
        ]
    },
    {
        slug: "leis-e-promessas",
        title: "Leis e Promessas",
        description: "Os fundamentos éticos e morais de todo escoteiro.",
        color: "secondary",
        highlighted: false,
        questions: [
            {
                id: "q1",
                question: "Quantos artigos tem a Lei Escoteira (no Brasil)?",
                options: [
                    { id: "A", text: "10", isCorrect: true },
                    { id: "B", text: "12", isCorrect: false },
                    { id: "C", text: "8", isCorrect: false },
                    { id: "D", text: "5", isCorrect: false }
                ]
            },
            {
                id: "q2",
                question: "O lema do Ramo Escoteiro é:",
                options: [
                    { id: "A", text: "Melhor Possível", isCorrect: false },
                    { id: "B", text: "Sempre Alerta", isCorrect: true },
                    { id: "C", text: "Servir", isCorrect: false },
                    { id: "D", text: "Sempre Servir", isCorrect: false }
                ]
            }
        ]
    }
];

const SeedPage = () => {
    const [status, setStatus] = useState("Verificando permissões...");
    const [isAdmin, setIsAdmin] = useState(false);
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdmin = async () => {
            if (!user) {
                // Pequeno delay para garantir que o userStore carregou (opcional, mas bom pra UX)
                setTimeout(() => {
                    const currentUser = useUserStore.getState().user;
                    if (!currentUser) {
                        alert("Login necessário!");
                        navigate('/login');
                    }
                }, 1000);
                return;
            }

            try {
                // Verifica se existe um documento na coleção 'admins' com o email do usuário
                const docRef = doc(db, "admins", user.email);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists() && docSnap.data().active === true) {
                    setIsAdmin(true);
                    setStatus("Aguardando...");
                } else {
                    setStatus("Acesso Negado: Seu usuário não é administrador ativo.");
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error("Erro ao verificar admin:", error);
                setStatus("Erro ao verificar permissões.");
            }
        };

        checkAdmin();
    }, [user, navigate]);

    const handleSeed = async () => {
        if (!isAdmin) return;

        setStatus("Iniciando carga de dados...");
        try {
            const batch = writeBatch(db);
            quizzes.forEach(quiz => {
                const docRef = doc(collection(db, "quizzes"), quiz.slug);
                batch.set(docRef, quiz);
            });
            await batch.commit();
            setStatus("Sucesso! O banco de dados foi populado.");
        } catch (error) {
            console.error(error);
            setStatus("Erro: " + (error as any).message);
        }
    };

    if (!user && !isAdmin) {
        return <div className="p-10 text-center">Verificando autenticação...</div>;
    }

    if (user && !isAdmin) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold mb-4 text-red-600">Acesso Negado</h1>
                    <p className="text-gray-600">
                        O usuário <strong>{user.email}</strong> não está na lista de administradores.
                    </p>
                    <button onClick={() => navigate('/')} className="mt-6 text-blue-500 hover:underline">Voltar para Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Popular Banco de Dados</h1>
                <p className="text-gray-600 mb-2 text-center">
                    Bem-vindo, <strong>{user?.name}</strong>.
                </p>
                <p className="text-gray-500 text-sm mb-6 text-center">
                    Isso irá criar/sobrescrever os quizzes iniciais no Firestore.
                </p>

                <div className="flex justify-center">
                    <button
                        onClick={handleSeed}
                        className="px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-colors"
                    >
                        Executar Carga (Seed)
                    </button>
                </div>

                {status && (
                    <div className="mt-6 p-4 bg-gray-50 rounded border text-center">
                        <span className="font-mono text-sm">{status}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SeedPage;
