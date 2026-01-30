import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import type { Category, QuizQuestion } from '@/types/category';
import { CaretLeftIcon, PlusIcon, TrashIcon, CheckCircleIcon, CircleIcon } from '@phosphor-icons/react';
import ConfirmationModal from '@/components/ConfirmationModal';

const AdminQuizFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [questionToDelete, setQuestionToDelete] = useState<number | null>(null);

    // Initial State
    const [formData, setFormData] = useState<Category>({
        title: '',
        slug: '',
        description: '',
        color: 'primary',
        highlighted: false,
        questions: []
    });

    // Load Data if editing
    useEffect(() => {
        const loadQuiz = async () => {
            if (!id) return;
            setIsLoading(true);
            try {
                // In our current schema, the Document ID is the SLUG.
                // However, usually ID and Slug might differ. Let's assume we used Slug as ID in SeedPage.
                // "const docRef = doc(collection(db, "quizzes"), quiz.slug);" -> Yes, ID is Slug.
                // But wait, if user edits slug, we might have issues if we rely on it as ID.
                // For now, let's assume we fetch by ID (which is the slug passed in params).

                const docRef = doc(db, "quizzes", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setFormData({ id: docSnap.id, ...docSnap.data() } as Category);
                } else {
                    alert("Quiz não encontrado!");
                    navigate('/admin/quizzes');
                }
            } catch (error) {
                console.error("Erro ao carregar quiz:", error);
                alert("Erro ao carregar dados.");
            } finally {
                setIsLoading(false);
            }
        };

        loadQuiz();
    }, [id, navigate]);

    // Handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    // Slug Generator
    const generateSlug = () => {
        const slug = formData.title
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
            .replace(/[^\w\s-]/g, "") // remove special chars
            .replace(/\s+/g, "-"); // space to dash
        setFormData(prev => ({ ...prev, slug }));
    };

    const questionsEndRef = useRef<HTMLDivElement>(null);

    // Question Handlers
    const addQuestion = () => {
        const newQuestion: QuizQuestion = {
            id: crypto.randomUUID(),
            question: '',
            options: [
                { id: 'A', text: '', isCorrect: false },
                { id: 'B', text: '', isCorrect: false },
                { id: 'C', text: '', isCorrect: false },
                { id: 'D', text: '', isCorrect: false }
            ]
        };
        setFormData(prev => ({
            ...prev,
            questions: [...(prev.questions || []), newQuestion]
        }));

        // Scroll to the new question (bottom) after render
        setTimeout(() => {
            questionsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const requestRemoveQuestion = (index: number) => {
        setQuestionToDelete(index);
    };

    const confirmRemoveQuestion = () => {
        if (questionToDelete === null) return;
        setFormData(prev => ({
            ...prev,
            questions: prev.questions?.filter((_, i) => i !== questionToDelete)
        }));
        setQuestionToDelete(null);
    };

    const updateQuestion = (index: number, field: string, value: string) => {
        setFormData(prev => {
            const newQuestions = [...(prev.questions || [])];
            newQuestions[index] = { ...newQuestions[index], [field]: value };
            return { ...prev, questions: newQuestions };
        });
    };

    const updateOption = (qIndex: number, oIndex: number, text: string) => {
        setFormData(prev => {
            const newQuestions = [...(prev.questions || [])];
            const newOptions = [...newQuestions[qIndex].options];
            newOptions[oIndex] = { ...newOptions[oIndex], text };
            newQuestions[qIndex] = { ...newQuestions[qIndex], options: newOptions };
            return { ...prev, questions: newQuestions };
        });
    };

    const setCorrectOption = (qIndex: number, oIndex: number) => {
        setFormData(prev => {
            const newQuestions = [...(prev.questions || [])];
            const newOptions = newQuestions[qIndex].options.map((opt, i) => ({
                ...opt,
                isCorrect: i === oIndex
            }));
            newQuestions[qIndex] = { ...newQuestions[qIndex], options: newOptions };
            return { ...prev, questions: newQuestions };
        });
    };

    // Save
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.slug) {
            alert("Título e Slug são obrigatórios.");
            return;
        }

        if (!formData.questions || formData.questions.length === 0) {
            alert("Adicione pelo menos uma pergunta.");
            return;
        }

        setIsSaving(true);
        try {
            // We use the SLUG as the Document ID to ensure clean URLs and Uniqueness
            // Note: If renaming slug, we technically create a new doc and should delete old one, 
            // but for simplicity let's just write to the new slug doc.

            await setDoc(doc(db, "quizzes", formData.slug), formData);

            alert("Quiz salvo com sucesso!");
            navigate('/admin/quizzes');
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar quiz: " + (error as any).message);
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div className="p-8 text-center">Carregando...</div>;

    return (
        <form onSubmit={handleSave} className="max-w-4xl mx-auto pb-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/quizzes')}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                    >
                        <CaretLeftIcon size={24} />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {isEditing ? 'Editar Quiz' : 'Novo Quiz'}
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={generateSlug}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                        Gerar Slug
                    </button>
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:brightness-90 disabled:opacity-50 cursor-pointer"
                    >
                        {isSaving ? 'Salvando...' : 'Salvar Quiz'}
                    </button>
                </div>
            </div>

            {/* Main Info Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Título do Quiz</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="Ex: Primeiros Socorros"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="ex: primeiros-socorros"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        rows={3}
                        placeholder="Uma breve descrição sobre o que trata este quiz..."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cor do Tema</label>
                        <select
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        >
                            <option value="primary">Primary (Verde)</option>
                            <option value="secondary">Secondary (Laranja)</option>
                        </select>
                    </div>
                    <div className="flex items-center h-full pt-6">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="highlighted"
                                checked={formData.highlighted}
                                onChange={handleCheckboxChange}
                                className="w-5 h-5 text-primary rounded focus:ring-primary border-gray-300 cursor-pointer"
                            />
                            <span className="text-gray-900 font-medium">Destacar na Home?</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Questions Section */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Perguntas ({formData.questions?.length || 0})</h2>
                <button
                    type="button"
                    onClick={addQuestion}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary font-bold rounded-lg hover:bg-secondary/20 transition-colors cursor-pointer"
                >
                    <PlusIcon size={20} />
                    Adicionar Pergunta
                </button>
            </div>

            <div className="space-y-6">
                {formData.questions?.map((q, qIndex) => (
                    <div key={q.id || qIndex} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative group">
                        <button
                            type="button"
                            onClick={() => requestRemoveQuestion(qIndex)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Remover pergunta"
                        >
                            <TrashIcon size={20} />
                        </button>

                        <div className="mb-6 pr-10">
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Pergunta #{qIndex + 1}
                            </label>
                            <input
                                type="text"
                                value={q.question}
                                onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-medium"
                                placeholder="Digite a pergunta aqui..."
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {q.options.map((opt, oIndex) => (
                                <div
                                    key={opt.id}
                                    className={`relative flex items-center p-1 rounded-lg border transition-colors ${opt.isCorrect ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setCorrectOption(qIndex, oIndex)}
                                        className={`p-3 mr-2 rounded-md transition-colors cursor-pointer ${opt.isCorrect ? 'text-green-600' : 'text-gray-300 hover:text-green-400'}`}
                                        title="Marcar como correta"
                                    >
                                        {opt.isCorrect ? <CheckCircleIcon size={24} weight="fill" /> : <CircleIcon size={24} />}
                                    </button>

                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-gray-400 mb-1 pl-1">Opção {opt.id}</div>
                                        <input
                                            type="text"
                                            value={opt.text}
                                            onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                                            className="w-full bg-transparent border-none p-1 focus:ring-0 outline-none text-gray-900 placeholder-gray-400"
                                            placeholder={`Resposta da opção ${opt.id}`}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {formData.questions?.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border-dashed border-2 border-gray-300 text-gray-500">
                        Nenhuma pergunta adicionada ainda. Clique no botão acima para começar.
                    </div>
                )}

                <div ref={questionsEndRef} />
            </div>

            <ConfirmationModal
                isOpen={questionToDelete !== null}
                onClose={() => setQuestionToDelete(null)}
                onConfirm={confirmRemoveQuestion}
                title="Remover Pergunta"
                message="Tem certeza que deseja remover esta pergunta? Esta ação não pode ser desfeita."
                isDestructive
                confirmText="Remover"
            />
        </form>
    );
};

export default AdminQuizFormPage;
