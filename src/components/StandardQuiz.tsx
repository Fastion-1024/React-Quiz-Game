import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { IQuestion, IQuestions, IAnswer } from '../lib/interfaces';
import { decodeURIQuestions, shuffleArray } from '../lib/utils';
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';

interface IProps {
    url: string;
}

const StandardQuiz: React.FC<IProps> = ({ url }) => {
    const { data, error } = useFetch<IQuestions>(url);
    const [questions, setQuestions] = useState<IQuestion[]>();
    const [userAnswers, setUserAnswers] = useState<IAnswer[]>([]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (data) {
            console.log('Questions Updated');

            const decodedQuestions = decodeURIQuestions(data);
            setQuestions(
                decodedQuestions.map((question) => {
                    return {
                        ...question,
                        shuffled_answers: shuffleArray([
                            ...question.incorrect_answers,
                            question.correct_answer,
                        ]),
                    };
                })
            );
        }
    }, [data]);

    const nextQuestion = () => {
        const newIndex = index + 1;

        if (questions && newIndex < questions.length) {
            setIndex(newIndex);
        } else {
            setGameOver(true);
        }
    };

    const checkAnswer = (answer: string) => {
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

    // Render
    if (!data || !questions) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        );
    }

    if (gameOver) {
        return (
            <div>
                <ResultsCard score={score} userAnswers={userAnswers} />
            </div>
        );
    }

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
};

export default StandardQuiz;
