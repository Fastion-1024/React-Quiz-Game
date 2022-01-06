import { useState } from 'react';
import { useMainContext } from '../hooks/mainContext';
import useFetch from '../hooks/useFetch';
import { ICategories } from '../lib/interfaces';
import { RiArrowGoBackFill } from 'react-icons/ri';

const Options: React.FC = () => {
    const { data, error } = useFetch<ICategories>('https://opentdb.com/api_category.php');
    const { gameOptions, navigateToMainMenu, updateGameOptions } = useMainContext();
    const [options, setOptions] = useState(gameOptions);

    const returnToMainMenu = () => {
        updateGameOptions(options);
        navigateToMainMenu();
    };

    return (
        <section className='options-container'>
            <h1 className='text-center text-5xl sm:text-6xl md:text-7xl text-white font-black filter text-shadow-multi my-4 sm:my-6'>
                Options
            </h1>

            {/* Category */}
            <label
                className='block text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold'
                htmlFor='categories'>
                Select Category
            </label>
            <select
                className='block py-2 text-center rounded-lg text-xl bg-gray-300 mx-auto max-w-full border-2 border-gray-800'
                id='categories'
                value={options.category}
                onChange={(e) => setOptions({ ...options, category: e.target.value })}>
                <option value=''>Any Category</option>
                {data &&
                    data.trivia_categories.map((category) => {
                        return <option value={category.id}>{category.name}</option>;
                    })}
            </select>

            {/* Difficulty */}
            <h2 className='text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold'>
                Select Difficulty
            </h2>
            <div className='flex justify-center items-center space-x-1'>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='difficulty'
                        id='difficultyAny'
                        value=''
                        hidden
                        checked={options.difficulty === ''}
                        onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}
                    />
                    <label
                        htmlFor='difficultyAny'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        Any
                    </label>
                </div>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='difficulty'
                        id='difficultyEasy'
                        value='easy'
                        hidden
                        checked={options.difficulty === 'easy'}
                        onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}
                    />
                    <label
                        htmlFor='difficultyEasy'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        Easy
                    </label>
                </div>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='difficulty'
                        id='difficultyMedium'
                        value='medium'
                        hidden
                        checked={options.difficulty === 'medium'}
                        onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}
                    />
                    <label
                        htmlFor='difficultyMedium'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        Medium
                    </label>
                </div>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='difficulty'
                        id='difficultyHard'
                        value='hard'
                        hidden
                        checked={options.difficulty === 'hard'}
                        onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}
                    />
                    <label
                        htmlFor='difficultyHard'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        Hard
                    </label>
                </div>
            </div>

            {/* Type */}
            <h2 className='text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold'>
                Select Type
            </h2>
            <div className='flex justify-center items-center space-x-1'>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='type'
                        id='typeAny'
                        value=''
                        hidden
                        checked={options.type === ''}
                        onChange={(e) => setOptions({ ...options, type: e.target.value })}
                    />
                    <label
                        htmlFor='typeAny'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        Any
                    </label>
                </div>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='type'
                        id='typeMultiple'
                        value='multiple'
                        hidden
                        checked={options.type === 'multiple'}
                        onChange={(e) => setOptions({ ...options, type: e.target.value })}
                    />
                    <label
                        htmlFor='typeMultiple'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        Multiple Choice
                    </label>
                </div>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='type'
                        id='typeBoolean'
                        value='boolean'
                        hidden
                        checked={options.type === 'boolean'}
                        onChange={(e) => setOptions({ ...options, type: e.target.value })}
                    />
                    <label
                        htmlFor='typeBoolean'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        True / False
                    </label>
                </div>
            </div>

            {/* No of Questions */}

            <h2 className='text-center text-2xl sm:text-3xl mt-8 mb-2 sm:mb-4 text-gray-800 font-bold'>
                Select Number of Questions
            </h2>
            <div className='flex justify-center items-center space-x-1'>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='amount'
                        id='amountTen'
                        value={10}
                        hidden
                        checked={options.amount === 10}
                        onChange={(e) =>
                            setOptions({ ...options, amount: parseInt(e.target.value) })
                        }
                    />
                    <label
                        htmlFor='amountTen'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        10
                    </label>
                </div>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='amount'
                        id='amountFifteen'
                        value={15}
                        hidden
                        checked={options.amount === 15}
                        onChange={(e) =>
                            setOptions({ ...options, amount: parseInt(e.target.value) })
                        }
                    />
                    <label
                        htmlFor='amountFifteen'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        15
                    </label>
                </div>
                <div className='inline-flex rounded-lg'>
                    <input
                        type='radio'
                        name='amount'
                        id='amountTwenty'
                        value={20}
                        hidden
                        checked={options.amount === 20}
                        onChange={(e) =>
                            setOptions({ ...options, amount: parseInt(e.target.value) })
                        }
                    />
                    <label
                        htmlFor='amountTwenty'
                        className='radio disable-select text-center text-l sm:text-xl self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75 bg-gray-300 border-2 border-gray-800'>
                        20
                    </label>
                </div>
            </div>

            {/* Back Navigation */}
            <button
                className='absolute bottom-5 left-5 z-10 text-5xl sm:text-6xl md:text-7xl text-white'
                onClick={returnToMainMenu}>
                <RiArrowGoBackFill aria-hidden={true} focusable={false} />
                <span className='visually-hidden'>Back</span>
            </button>
        </section>
    );
};

export default Options;
