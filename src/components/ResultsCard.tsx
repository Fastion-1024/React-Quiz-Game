import React from 'react';
import { IAnswer } from '../lib/interfaces';

interface IProps {
    score: number;
    userAnswers: IAnswer[];
}

const ResultsCard: React.FC<IProps> = ({ score, userAnswers }) => {
    return (
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
    );
};

export default ResultsCard;
