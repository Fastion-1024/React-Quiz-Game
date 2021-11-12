import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface IProps {
    currentLives: number;
    maxLives: number;
}

const LifeBar: React.FC<IProps> = ({ currentLives, maxLives }) => {
    const lives = Array.from(Array(maxLives).keys());

    return (
        <div className='flex flex-row justify-center my-2 space-x-1'>
            {lives.map((life, index) => {
                return index < currentLives ? (
                    <FaHeart className='fill-current text-red-500' />
                ) : (
                    <FaRegHeart className='fill-current text-red-500' />
                );
            })}
        </div>
    );
};

export default LifeBar;
