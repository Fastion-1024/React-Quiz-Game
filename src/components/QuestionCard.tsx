import React from 'react';
import { IQuestion } from '../lib/interfaces';

interface IProps {
    question: IQuestion;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<IProps> = ({ question, questionNumber, totalQuestions }) => {
    return (
        <div>
            <h1>{decodeURIComponent(question.question)}</h1>
            <h4>
                {questionNumber} / {totalQuestions}
            </h4>
            <button>{decodeURIComponent(question.incorrect_answers[0])}</button>
            <button>{decodeURIComponent(question.incorrect_answers[1])}</button>
            <button>{decodeURIComponent(question.incorrect_answers[2])}</button>
            <button>{decodeURIComponent(question.correct_answer)}</button>
        </div>
    );
};

export default QuestionCard;
