import React from 'react';

interface IProps {
    currentTime: number;
    maxTime: number;
}

const TimerBar: React.FC<IProps> = ({ currentTime, maxTime }) => {
    const widthPercent = (currentTime / maxTime) * 100;

    return (
        // Container / Background
        <div className='h-3 sm:h-5 bg-gray-800 relative'>
            <div
                style={{ width: `${widthPercent}%` }}
                className={`h-3 sm:h-5 bg-gray-500 transition-{width} duration-1000 ease-linear ${
                    currentTime < 5 ? 'animate-pulse-full' : 'animate-none'
                }`}
            />
        </div>
    );
};

export default TimerBar;
