import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { decodeURIQuestions, shuffleArray } from '../lib/utils';
import { IQuestion, IQuestions } from '../lib/interfaces';

const useDecodeURIFetch = (url?: string, options?: RequestInit) => {
    const { data, error } = useFetch<IQuestions>(url, options);
    const [decodedData, setDecodedData] = useState<IQuestion[]>();

    useEffect(() => {
        if (!data) return;

        const decoded = decodeURIQuestions(data);
        setDecodedData(
            decoded.map((item) => {
                return {
                    ...item,
                    shuffled_answers: shuffleArray([
                        ...item.incorrect_answers,
                        item.correct_answer,
                    ]),
                };
            })
        );
    }, [data]);

    return [decodedData, error] as const;
};

export default useDecodeURIFetch;
