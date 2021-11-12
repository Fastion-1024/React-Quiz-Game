import React from 'react';
import { IAnswer, IQuestion } from '../lib/interfaces';

interface IProps {
    question: IQuestion;
    userAnswer: IAnswer | undefined;
    callback: (answer: string) => void;
}

const QuestionCard: React.FC<IProps> = ({ question, userAnswer, callback }) => {
    return (
        <div className='flex flex-col justify-center h-full'>
            <h1 className='text-center text-2xl font-bold my-10 px-4'>{question.question}</h1>
            <div className='flex flex-col h-full space-y-5'>
                {question.shuffled_answers?.map((item, index) => {
                    return (
                        <button
                            className='btn-standard'
                            key={index}
                            value={item}
                            disabled={userAnswer ? true : false}
                            onClick={(e) => callback(e.currentTarget.value)}>
                            {item}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionCard;
