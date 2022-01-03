import React, { useState, useEffect } from 'react';
import { useMainContext } from '../hooks/mainContext';
import useDecodeURIFetch from '../hooks/useDecodeURIFetch';
import { modes } from '../lib/enums';
import { IAnswer } from '../lib/interfaces';
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';
import useTimer from '../hooks/useTimer';
import TimerBar from './TimerBar';
import LifeBar from './LifeBar';

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

    // --- State - Timed Mode ---
    const [timeRemaining, isTimerRunning, startTimer, stopTimer, resetTimer] = useTimer(20, () =>
        checkAnswer('')
    );

    // --- State - Marathon Mode ---
    const [lives, setLives] = useState(5);

    // --- Context ---
    const { navigateToMainMenu } = useMainContext();

    // --- Functions ---
    const checkAnswer = (answer: string): void => {
        // Guard clause for possible undefined value
        if (!questions) return;

        const correct = questions[index].correct_answer === answer;
        if (correct) {
            addScore();
        }

        if (!correct && mode === modes.Marathon) {
            const newLives = lives - 1;
            if (newLives >= 0) setLives(newLives);
            else setGameOver(true);
        }

        const answerObj = {
            question: questions[index].question,
            answer,
            correct,
            correctAnswer: questions[index].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObj]);

        setTimeout(() => {
            nextQuestion();
        }, 1000);
    };

    const nextQuestion = (): void => {
        const newIndex = index + 1;

        if (questions && newIndex < questions.length) {
            setIndex(newIndex);
        } else {
            setGameOver(true);
        }
    };

    const addScore = () => {
        switch (mode) {
            case modes.Standard:
                setScore((prev) => prev + 1);
                break;

            case modes.Time:
                setScore((prev) => prev + Math.max(0, timeRemaining));
                break;

            case modes.Marathon:
                setScore((prev) => prev + lives * 5);
                break;

            default:
                throw new Error('No matching mode found!');
        }
    };

    useEffect(() => {
        if (mode === modes.Time) {
            resetTimer();
            startTimer();
        }
    }, [index]);

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
            <div className='flex flex-col h-full p-5 space-y-5'>
                <ResultsCard score={score} userAnswers={userAnswers} />
                <button className='btn-standard' onClick={navigateToMainMenu}>
                    Back
                </button>
            </div>
        );
    }

    return (
        <div className='quiz-container'>
            <QuestionCard
                question={questions[index]}
                userAnswer={userAnswers[index]}
                callback={checkAnswer}
            />

            {/* Time Mode Components */}
            {mode === modes.Time && <TimerBar currentTime={timeRemaining} maxTime={20} />}

            {/* Marathon Mode Components */}
            {mode === modes.Marathon && <LifeBar currentLives={lives} maxLives={5} />}

            {/* <div className='flex flex-row justify-between px-5 py-1 bg-gray-400'>
                <h4>
                    {index + 1} / {questions.length}
                </h4>
                <h4>Score:- {score}</h4>
            </div> */}

            <div className='flex flex-row justify-around bg-gray-800 text-gray-100 text-4xl w-1/2 mx-auto py-2 rounded-t-full'>
                {/* <h4>
                    {index + 1} / {questions.length}
                </h4> */}
                <h4>{score}</h4>
            </div>
        </div>
    );
};

export default Quiz;
