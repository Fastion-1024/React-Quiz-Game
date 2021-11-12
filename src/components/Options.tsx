import { useState } from 'react';
import { useMainContext } from '../hooks/mainContext';
import useFetch from '../hooks/useFetch';
import { ICategories } from '../lib/interfaces';

const Options: React.FC = () => {
    const { data, error } = useFetch<ICategories>('https://opentdb.com/api_category.php');
    const { gameOptions, navigateToMainMenu, updateGameOptions } = useMainContext();
    const [options, setOptions] = useState(gameOptions);

    const returnToMainMenu = () => {
        updateGameOptions(options);
        navigateToMainMenu();
    };

    return (
        <section className='flex flex-col justify-center h-full w-full space-y-5 px-5'>
            <div className='flex flex-col'>
                <label className='text-center pr-4' htmlFor='categories'>
                    Select Category
                </label>
                <select
                    className='py-1 text-center rounded-lg'
                    id='categories'
                    value={options.category}
                    onChange={(e) => setOptions({ ...options, category: e.target.value })}>
                    <option value=''>Any Category</option>
                    {data &&
                        data.trivia_categories.map((category) => {
                            return <option value={category.id}>{category.name}</option>;
                        })}
                </select>
            </div>
            <div className='flex flex-col'>
                <label className='text-center pr-4' htmlFor='difficulty'>
                    Select Difficulty
                </label>
                <select
                    className='py-1 text-center rounded-lg'
                    id='difficulty'
                    value={options.difficulty}
                    onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}>
                    <option value=''>Any Difficulty</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label className='text-center pr-4' htmlFor='type'>
                    Select Type
                </label>
                <select
                    className='py-1 text-center rounded-lg'
                    id='type'
                    value={options.type}
                    onChange={(e) => setOptions({ ...options, type: e.target.value })}>
                    <option value=''>Any Type</option>
                    <option value='multiple'>Multiple Choice</option>
                    <option value='boolean'>True / False</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label className='text-center pr-4' htmlFor='number'>
                    Select Number of Questions
                </label>
                <select
                    className='py-1 text-center rounded-lg'
                    id='number'
                    value={options.amount}
                    onChange={(e) =>
                        setOptions({
                            ...options,
                            amount: parseInt(e.target.value),
                        })
                    }>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <button className='btn-standard' onClick={returnToMainMenu}>
                Back
            </button>
        </section>
    );
};

export default Options;
