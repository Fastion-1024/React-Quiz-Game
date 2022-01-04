import React from 'react';
import { IAnswer, IQuestion } from '../lib/interfaces';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface IProps {
    question: IQuestion;
    userAnswer: IAnswer | undefined;
    questionNum: number;
    questionCount: number;
    callback: (answer: string) => void;
}

const QuestionCard: React.FC<IProps> = ({
    question,
    userAnswer,
    questionNum,
    questionCount,
    callback,
}) => {
    const letters = 'ABCD';

    return (
        <div className='flex flex-col justify-center h-full'>
            <h1 className='text-center text-xl sm:text-2xl md:text-3xl font-bold p-4 z-10 bg-gray-800 w-full sm:w-4/5 mx-auto rounded-b-3xl text-gray-100'>
                {question.question}
            </h1>
            <div className='flex flex-row justify-around bg-gray-500 text-gray-100 text-xl md:text-3xl w-1/2 mx-auto py-2 rounded-b-full z-10 text-shadow'>
                <h4>
                    {questionNum} / {questionCount}
                </h4>
            </div>
            <div className='flex flex-col h-full space-y-10 z-10 justify-center items-center'>
                {question.shuffled_answers?.map((item, index) => {
                    return (
                        <button
                            className='w-4/5 sm:w-3/4 md:w-3/5 filter drop-shadow-md'
                            key={index}
                            value={item}
                            disabled={userAnswer ? true : false}
                            onClick={(e) => callback(e.currentTarget.value)}>
                            <span className='block my-auto py-2 rounded-lg text-lg sm:text-xl text-shadow text-gray-100 font-semibold bg-gray-500'>
                                {item}
                            </span>

                            {userAnswer ? (
                                // Answer Indicator
                                <span
                                    // Correct bg color is green. Wrong bg color is red
                                    className={`flex justify-cente text-white font-semibold h-6 w-1/2 mx-auto rounded-b-full ${
                                        userAnswer.correctAnswer === item
                                            ? 'bg-green-800'
                                            : 'bg-red-800'
                                    }`}>
                                    {userAnswer.correctAnswer === item ? (
                                        // Correct Icon
                                        <FaCheck className='m-auto' />
                                    ) : (
                                        // Wrong Icon
                                        <FaTimes className='m-auto' />
                                    )}
                                </span>
                            ) : (
                                // Default Indicator
                                <span className='flex justify-center bg-gray-800 text-white font-semibold h-6 w-1/2 mx-auto rounded-b-full'>
                                    {letters.charAt(index)}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionCard;
