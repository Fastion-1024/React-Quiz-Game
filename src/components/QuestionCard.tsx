import React from 'react';
import { IAnswer, IQuestion } from '../lib/interfaces';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface IProps {
    question: IQuestion;
    userAnswer: IAnswer | undefined;
    callback: (answer: string) => void;
}

const QuestionCard: React.FC<IProps> = ({ question, userAnswer, callback }) => {
    const letters = 'ABCD';

    return (
        <div className='flex flex-col justify-center h-full'>
            <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold my-5 px-4 z-10'>
                {question.question}
            </h1>
            <div className='flex flex-col h-full space-y-10 z-10 justify-center items-center'>
                {question.shuffled_answers?.map((item, index) => {
                    return (
                        <button
                            className='w-4/5 sm:w-3/4 md:w-3/5 filter drop-shadow-md'
                            key={index}
                            value={item}
                            disabled={userAnswer ? true : false}
                            onClick={(e) => callback(e.currentTarget.value)}>
                            <span className='block bg-gray-500 text-gray-100 rounded-lg py-2 my-auto font-semibold text-lg sm:text-xl text-shadow'>
                                {item}
                            </span>
                            <span className='flex justify-center bg-gray-800 text-white font-semibold h-6 w-1/2 mx-auto rounded-b-full'>
                                {userAnswer ? (
                                    userAnswer.correctAnswer === item ? (
                                        <FaCheck className='m-auto' />
                                    ) : (
                                        <FaTimes className='m-auto' />
                                    )
                                ) : (
                                    letters.charAt(index)
                                )}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionCard;
