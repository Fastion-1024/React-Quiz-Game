import React from 'react';
import { IAnswer } from '../lib/interfaces';
import { RiArrowGoBackFill } from 'react-icons/ri';

interface IProps {
    score: number;
    userAnswers: IAnswer[];
    navigateBack: () => void;
}

const ResultsCard: React.FC<IProps> = ({ score, userAnswers, navigateBack }) => {
    return (
        <div className='flex flex-col h-full p-5 space-y-5'>
            <div className='flex flex-col items-center space-y-5'>
                <h2 className='text-2xl font-bold'>Your Final Score</h2>
                <h3 className='text-2xl font-bold'>{score}</h3>
                {userAnswers.map((item, index) => {
                    return (
                        <div className='text-center' key={index}>
                            <h3 className=' font-bold mb-2'>{item.question}</h3>
                            <h4>Your Answer:- {item.answer}</h4>
                            <h4>Correct Answer:- {item.correctAnswer}</h4>
                        </div>
                    );
                })}
            </div>
            <button
                className='absolute bottom-5 left-5 z-10 text-5xl sm:text-6xl md:text-7xl text-white bg-gray-800'
                onClick={navigateBack}>
                <RiArrowGoBackFill aria-hidden={true} focusable={false} />
                <span className='visually-hidden'>Back</span>
            </button>
        </div>
    );
};

export default ResultsCard;
