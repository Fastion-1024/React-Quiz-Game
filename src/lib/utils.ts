import { IQuestion, IQuestions } from './interfaces';

export const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const decodeURIQuestions = (questions: IQuestions): IQuestion[] => {
    return questions.results.map((question) => {
        return {
            ...question,
            category: decodeURIComponent(question.category),
            question: decodeURIComponent(question.question),
            correct_answer: decodeURIComponent(question.correct_answer),
            incorrect_answers: question.incorrect_answers.map((answer) => {
                return decodeURIComponent(answer);
            }),
        };
    });
};
