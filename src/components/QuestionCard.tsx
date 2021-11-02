import React from 'react';
import { IAnswer, IQuestion } from '../lib/interfaces';

interface IProps {
    question: IQuestion;
    userAnswer: IAnswer | undefined;
    callback: (answer: string) => void;
}

const QuestionCard: React.FC<IProps> = ({ question, userAnswer, callback }) => {
    return (
        <div>
            <h1>{question.question}</h1>
            {question.shuffled_answers?.map((item, index) => {
                return (
                    <button
                        key={index}
                        value={item}
                        disabled={userAnswer ? true : false}
                        onClick={(e) => callback(e.currentTarget.value)}>
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

export default QuestionCard;
