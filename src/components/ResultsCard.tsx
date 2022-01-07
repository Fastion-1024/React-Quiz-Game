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
        <div className='results-container flex flex-col h-full'>
            <h2 className='text-4xl md:text-6xl text-center my-4 font-black text-white filter text-shadow-multi'>
                Results
            </h2>
            <div className='flex flex-col items-center space-y-5 px-4 md:px-5 overflow-y-auto pb-1/4vh'>
                {userAnswers.map((item, index) => {
                    return (
                        <div className='text-center' key={index}>
                            <h3 className='text-lg sm:text-xl md:text-2xl font-black mb-2 text-gray-800'>{`${
                                index + 1
                            }) ${item.question}`}</h3>
                            <h4
                                className={`text-md sm:text-lg md:text-xl font-bold ${
                                    item.correct ? 'text-green-900' : 'text-red-900'
                                }`}>
                                Your Answer:- {item.answer}
                            </h4>
                            <h4 className='text-md sm:text-lg md:text-xl font-bold text-green-900'>
                                Correct Answer:- {item.correctAnswer}
                            </h4>
                        </div>
                    );
                })}
            </div>
            <div className='absolute bottom-2 sm:bottom-6 left-0 w-full text-center text-gray-100 filter text-shadow-multi z-10'>
                <h2 className='text-xl sm:text-3xl md:text-4xl font-bold'>Your Final Score</h2>
                <h3 className='text-xl sm:text-3xl md:text-4xl font-bold'>{score}</h3>
            </div>
            <button
                className='absolute bottom-2 left-2 z-10 text-5xl sm:text-6xl md:text-7xl text-white'
                onClick={navigateBack}>
                <RiArrowGoBackFill aria-hidden={true} focusable={false} />
                <span className='visually-hidden'>Back</span>
            </button>
        </div>
    );
};

export default ResultsCard;
