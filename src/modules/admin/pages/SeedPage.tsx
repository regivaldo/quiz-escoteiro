import { db } from '@/config/firebase';
import type { Category } from '@/types/category';
import { writeBatch, doc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { DatabaseIcon } from '@phosphor-icons/react';
import ConfirmationModal from '@/components/ConfirmationModal';
import { toast } from 'react-toastify';

const quizzes: Category[] = [
  {
    slug: 'especialidade-de-nos',
    title: 'Especialidade de Nós',
    description: 'Domine a arte da marinharia e estruturas com nós essenciais.',
    color: 'primary',
    highlighted: true,
    questions: [
      {
        id: 'q1',
        question: 'Qual nó é utilizado para unir duas cordas de diâmetros diferentes?',
        options: [
          { id: 'A', text: 'Nó Direito', isCorrect: false },
          { id: 'B', text: 'Nó de Escota', isCorrect: true },
          { id: 'C', text: 'Nó de Pescador', isCorrect: false },
          { id: 'D', text: 'Nó Lais de Guia', isCorrect: false },
        ],
      },
      {
        id: 'q2',
        question: 'Qual nó é conhecido por não correr e nem apertar demais sob tensão?',
        options: [
          { id: 'A', text: 'Volta do Fiel', isCorrect: false },
          { id: 'B', text: 'Nó de Correr', isCorrect: false },
          { id: 'C', text: 'Nó Lais de Guia', isCorrect: true },
          { id: 'D', text: 'Nó 8', isCorrect: false },
        ],
      },
      {
        id: 'q3',
        question: 'O Nó Direito é utilizado principalmente para:',
        options: [
          { id: 'A', text: 'Unir cordas de mesma espessura', isCorrect: true },
          { id: 'B', text: 'Iniciar amarras', isCorrect: false },
          { id: 'C', text: 'Encurtar cabos', isCorrect: false },
          { id: 'D', text: 'Descer de rapel', isCorrect: false },
        ],
      },
    ],
  },
  {
    slug: 'historia-do-escotismo',
    title: 'História do Escotismo',
    description: 'Viaje no tempo e descubra as origens do movimento.',
    color: 'secondary',
    highlighted: true,
    questions: [
      {
        id: 'q1',
        question: 'Quem foi o fundador do Escotismo?',
        options: [
          { id: 'A', text: 'Caio Vianna Martins', isCorrect: false },
          { id: 'B', text: 'Robert Baden-Powell', isCorrect: true },
          { id: 'C', text: 'Dom Pedro II', isCorrect: false },
          { id: 'D', text: 'Bear Grylls', isCorrect: false },
        ],
      },
      {
        id: 'q2',
        question: 'Em que ilha ocorreu o primeiro acampamento escoteiro?',
        options: [
          { id: 'A', text: 'Ilha de Brownsea', isCorrect: true },
          { id: 'B', text: 'Ilha de Man', isCorrect: false },
          { id: 'C', text: 'Ilha do Mel', isCorrect: false },
          { id: 'D', text: 'Ilha Grande', isCorrect: false },
        ],
      },
      {
        id: 'q3',
        question: 'Qual o ano de fundação do Movimento Escoteiro?',
        options: [
          { id: 'A', text: '1900', isCorrect: false },
          { id: 'B', text: '1910', isCorrect: false },
          { id: 'C', text: '1907', isCorrect: true },
          { id: 'D', text: '1899', isCorrect: false },
        ],
      },
    ],
  },
  {
    slug: 'primeiros-socorros',
    title: 'Primeiros Socorros',
    description: 'Esteja Sempre Alerta para salvar vidas em emergências.',
    color: 'primary',
    highlighted: false,
    questions: [
      {
        id: 'q1',
        question: 'Qual o procedimento para estancar uma hemorragia externa?',
        options: [
          { id: 'A', text: 'Aplicar torniquete imediatamente', isCorrect: false },
          { id: 'B', text: 'Compressão direta sobre o ferimento', isCorrect: true },
          { id: 'C', text: 'Lavar com água quente', isCorrect: false },
          { id: 'D', text: 'Oferecer água à vítima', isCorrect: false },
        ],
      },
      {
        id: 'q2',
        question: 'Em caso de queimadura de 1º grau, o que fazer?',
        options: [
          { id: 'A', text: 'Passar pasta de dente', isCorrect: false },
          { id: 'B', text: 'Estourar as bolhas', isCorrect: false },
          { id: 'C', text: 'Resfriar com água corrente fria', isCorrect: true },
          { id: 'D', text: 'Cobrir com pano seco', isCorrect: false },
        ],
      },
    ],
  },
  {
    slug: 'leis-e-promessas',
    title: 'Leis e Promessas',
    description: 'Os fundamentos éticos e morais de todo escoteiro.',
    color: 'secondary',
    highlighted: false,
    questions: [
      {
        id: 'q1',
        question: 'Quantos artigos tem a Lei Escoteira (no Brasil)?',
        options: [
          { id: 'A', text: '10', isCorrect: true },
          { id: 'B', text: '12', isCorrect: false },
          { id: 'C', text: '8', isCorrect: false },
          { id: 'D', text: '5', isCorrect: false },
        ],
      },
      {
        id: 'q2',
        question: 'O lema do Ramo Escoteiro é:',
        options: [
          { id: 'A', text: 'Melhor Possível', isCorrect: false },
          { id: 'B', text: 'Sempre Alerta', isCorrect: true },
          { id: 'C', text: 'Servir', isCorrect: false },
          { id: 'D', text: 'Sempre Servir', isCorrect: false },
        ],
      },
    ],
  },
];

const SeedPage = () => {
  const [status, setStatus] = useState('Aguardando ação...');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleSeed = async () => {
    setStatus('Iniciando carga de dados...');
    try {
      const batch = writeBatch(db);
      quizzes.forEach((quiz) => {
        const docRef = doc(collection(db, 'quizzes'), quiz.slug);
        batch.set(docRef, quiz);
      });
      await batch.commit();
      setStatus('Sucesso! O banco de dados foi populado.');
      toast.success('Banco de dados populado com sucesso!');
    } catch (error) {
      console.error(error);
      const msg = 'Erro: ' + (error as any).message;
      setStatus(msg);
      toast.error(msg);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Database Seed</h2>
        <p className="text-gray-500">Ferramenta para redefinir ou popular o banco de dados com dados iniciais.</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-red-50 text-red-600 rounded-lg">
            <DatabaseIcon size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Popular Banco de Dados</h3>
            <p className="text-gray-600 mt-1">
              Esta ação irá criar ou sobrescrever os quizzes padrão do sistema (<code>especialidade-de-nos</code>,{' '}
              <code>historia-do-escotismo</code>, etc).
              <br />
              <br />
              <strong>Atenção:</strong> Dados existentes nesses documentos serão perdidos.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-gray-100 pt-6">
          <button
            onClick={() => setIsConfirmOpen(true)}
            className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto cursor-pointer"
          >
            Executar Carga (Seed)
          </button>

          {status && (
            <div className="px-4 py-2 bg-gray-50 rounded border border-gray-200 text-sm font-medium text-gray-700 w-full sm:w-auto text-center font-mono">
              {status}
            </div>
          )}
        </div>
      </div>
      <ConfirmationModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleSeed}
        title="Sobrescrever Dados"
        message="Isso irá sobrescrever os dados dos quizzes iniciais. Deseja continuar? Dados existentes nesses documentos serão perdidos."
        isDestructive
        confirmText="Sobrescrever"
      />
    </div>
  );
};

export default SeedPage;
