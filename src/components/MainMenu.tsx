import { useState } from 'react';
import { useMainContext } from '../hooks/mainContext';
import { modes } from '../lib/enums';
import { FaClipboardList, FaCog, FaQuestion, FaRunning } from 'react-icons/fa';
import { TiStopwatch } from 'react-icons/ti';

const MainMenu: React.FC = () => {
    const { navigateToQuiz, navigateToOptions } = useMainContext();
    const [mode, setMode] = useState(modes.Standard);

    const getIcon = () => {
        switch (mode) {
            case modes.Standard:
                return <FaQuestion className='w-full h-full p-14 text-white' />;

            case modes.Time:
                return (
                    <TiStopwatch className='w-full h-full p-14 text-white transform -rotate-12' />
                );

            case modes.Marathon:
                return <FaRunning className='w-full h-full p-14 text-white' />;

            default:
                throw Error('No matching mode found!');
        }
    };

    return (
        <section className='main-menu-container'>
            <div className='absolute top-1/2 left-0 z-20 transform -translate-y-1/2 -translate-x-20 sm:-translate-x-24 md:-translate-x-28 h-60 w-60 sm:h-72 sm:w-72 md:h-88 md:w-88 rounded-full border-12 sm:border-16 md:border-20 border-gray-800 bg-gray-500 '>
                {getIcon()}
            </div>
            <h1 className='text-center text-5xl sm:text-6xl md:text-7xl text-white font-black filter text-shadow-multi my-8'>
                Trivia Quiz
            </h1>
            <div className='absolute top-1/2 left-20 md:left-32 z-10 w-2/3 transform -translate-y-1/2 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 md:space-y-10'>
                <button
                    className='btn-standard'
                    onClick={() => navigateToQuiz(modes.Standard)}
                    onMouseEnter={() => setMode(modes.Standard)}>
                    Standard
                </button>
                <button
                    className='btn-standard'
                    onClick={() => navigateToQuiz(modes.Time)}
                    onMouseEnter={() => setMode(modes.Time)}>
                    Timed
                </button>
                <button
                    className='btn-standard'
                    onClick={() => navigateToQuiz(modes.Marathon)}
                    onMouseEnter={() => setMode(modes.Marathon)}>
                    Marathon
                </button>
            </div>
            <div className='absolute bottom-0 w-full flex justify-between p-5 z-10'>
                <button
                    className='text-5xl sm:text-6xl md:text-7xl text-white'
                    onClick={navigateToOptions}>
                    <FaCog aria-hidden={true} focusable={false} />
                    <span className='visually-hidden'>Options</span>
                </button>
                <button
                    className='text-5xl sm:text-6xl md:text-7xl text-white'
                    onClick={navigateToOptions}>
                    <FaClipboardList aria-hidden={true} focusable={false} />
                    <span className='visually-hidden'>Score</span>
                </button>
            </div>
        </section>
    );
};

export default MainMenu;
