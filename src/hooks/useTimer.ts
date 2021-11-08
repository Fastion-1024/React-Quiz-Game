import React, { useState, useRef, useEffect } from 'react';

const useTimer = (duration: number, callback: () => void) => {
    const [timeRemaining, setTimeRemaining] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef<number>();
    const callbackRef = useRef<() => void>();

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setTimeRemaining(duration);
        setIsRunning(false);
    };

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = window.setInterval(() => {
                const time = timeRemaining - 1;
                if (time >= 0) {
                    setTimeRemaining(time);
                } else {
                    callbackRef.current && callbackRef.current();
                    stop();
                }
            }, 1000);
        }

        return () => window.clearInterval(timerRef.current);
    }, [isRunning, timeRemaining]);

    return [timeRemaining, isRunning, start, stop, reset] as const;
};

export default useTimer;
