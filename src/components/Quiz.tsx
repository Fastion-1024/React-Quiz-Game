import React, { useState } from 'react';
import { useMainContext } from '../hooks/mainContext';
import useDecodeURIFetch from '../hooks/useDecodeURIFetch';
import { modes } from '../lib/enums';
import { IAnswer } from '../lib/interfaces';
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';

interface IProps {
    url: string;
    mode: modes;
}

const Quiz: React.FC<IProps> = ({ url, mode }) => {
    // --- States ---
    const [questions, error] = useDecodeURIFetch(url);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [userAnswers, setUserAnswers] = useState<IAnswer[]>([]);

    // --- Context ---
    const { navigateToMainMenu } = useMainContext();

    // --- Functions ---
    const checkAnswer = (answer: string): void => {
        // Guard clause for possible undefined value
        if (!questions) return;

        const correct = questions[index].correct_answer === answer;
        if (correct) setScore((prev) => prev + 1);

        const answerObj = {
            question: questions[index].question,
            answer,
            correct,
            correctAnswer: questions[index].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObj]);

        setTimeout(() => {
            nextQuestion();
        }, 500);
    };

    const nextQuestion = (): void => {
        const newIndex = index + 1;

        if (questions && newIndex < questions.length) {
            setIndex(newIndex);
        } else {
            setGameOver(true);
        }
    };

    // --- Render ---
    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        );
    }

    if (!questions) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (gameOver) {
        return (
            <div>
                <ResultsCard score={score} userAnswers={userAnswers} />
                <button onClick={navigateToMainMenu}>Back</button>
            </div>
        );
    }

    if (mode === modes.Standard) {
        return (
            <div>
                <h4>
                    {index + 1} / {questions.length}
                </h4>
                <h4>Score:- {score}</h4>
                <QuestionCard
                    question={questions[index]}
                    userAnswer={userAnswers[index]}
                    callback={checkAnswer}
                />
            </div>
        );
    }

    if (mode === modes.Time) {
        return (
            <div>
                <h4>
                    {index + 1} / {questions.length}
                </h4>
                <h4>Score:- {score}</h4>
                <div className='progressbar-container'>
                    <div className='progressbar-filler'>
                        <span className='progressbar-label'></span>
                    </div>
                </div>
                <QuestionCard
                    question={questions[index]}
                    userAnswer={userAnswers[index]}
                    callback={checkAnswer}
                />
            </div>
        );
    }

    return <div></div>;
};

export default Quiz;
