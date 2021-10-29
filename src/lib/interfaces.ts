export interface IGameOptions {
    category: string;
    difficulty: string;
    type: string;
    amount: number;
}

export interface IQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}
