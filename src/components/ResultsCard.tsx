import React from 'react';
import { IAnswer } from '../lib/interfaces';

interface IProps {
    score: number;
    userAnswers: IAnswer[];
}

const ResultsCard: React.FC<IProps> = ({ score, userAnswers }) => {
    return (
        <div>
            <h2>Your Final Score</h2>
            <h3>{score}</h3>
            {userAnswers.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>Question:- {item.question}</h3>
                        <h4>Your Answer:- {item.answer}</h4>
                        <h4>Correct Answer:- {item.correctAnswer}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default ResultsCard;
