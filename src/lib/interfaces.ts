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
    shuffled_answers?: string[];
}

export interface IQuestions {
    response_code: number;
    results: IQuestion[];
}

export interface IAnswer {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ICategories {
    trivia_categories: ICategory[];
}
