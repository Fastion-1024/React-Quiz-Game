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
        <section className='mode-options'>
            <div>
                <label htmlFor='categories'>Select Category</label>
                <select
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
            <div>
                <label htmlFor='difficulty'>Select Difficulty</label>
                <select
                    id='difficulty'
                    value={options.difficulty}
                    onChange={(e) => setOptions({ ...options, difficulty: e.target.value })}>
                    <option value=''>Any Difficulty</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
            </div>
            <div>
                <label htmlFor='type'>Select Type</label>
                <select
                    id='type'
                    value={options.type}
                    onChange={(e) => setOptions({ ...options, type: e.target.value })}>
                    <option value=''>Any Type</option>
                    <option value='multiple'>Multiple Choice</option>
                    <option value='boolean'>True / False</option>
                </select>
            </div>
            <div>
                <label htmlFor='number'>Select Number of Questions</label>
                <select
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
            <button onClick={returnToMainMenu}>Back</button>
        </section>
    );
};

export default Options;
