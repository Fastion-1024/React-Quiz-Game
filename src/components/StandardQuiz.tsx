import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { IQuestion } from '../lib/interfaces';
import QuestionCard from './QuestionCard';

interface IProps {
    url: string;
}

interface FetchData {
    response_code: number;
    results: IQuestion[];
}

const StandardQuiz: React.FC<IProps> = ({ url }) => {
    const { data, error } = useFetch<FetchData>(url);
    const [index, setIndex] = useState(0);

    if (!data) {
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

    return (
        <div>
            <QuestionCard
                question={data.results[index]}
                questionNumber={index + 1}
                totalQuestions={data.results.length}
            />
        </div>
    );
};

export default StandardQuiz;
