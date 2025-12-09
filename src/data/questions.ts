export interface Option {
    text: string;
    isCorrect: boolean;
}

export interface Question {
    question: string;
    options: Option[];
}

export const questions: Question[] = [
    {
        question: "Qual é a cor do céu?",
        options: [
            { text: "Azul", isCorrect: true },
            { text: "Verde", isCorrect: false },
            { text: "Amarelo", isCorrect: false },
            { text: "Vermelho", isCorrect: false }
        ]
    },
    {
        question: "Em que ano estamos?",
        options: [
            { text: "2022", isCorrect: false },
            { text: "2023", isCorrect: false },
            { text: "2024", isCorrect: false },
            { text: "2025", isCorrect: true }
        ]
    },
    {
        question: "Quantos meses temos no ano?",
        options: [
            { text: "12", isCorrect: true },
            { text: "13", isCorrect: false },
            { text: "14", isCorrect: false },
            { text: "8", isCorrect: false }
        ]
    },
    {
        question: "Quantos dias temos na semana?",
        options: [
            { text: "7", isCorrect: true },
            { text: "8", isCorrect: false },
            { text: "9", isCorrect: false },
            { text: "10", isCorrect: false }
        ]
    },
];