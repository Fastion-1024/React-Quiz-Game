import { useMainContext } from '../hooks/mainContext';
import { modes } from '../lib/enums';

const MainMenu: React.FC = () => {
    const { navigateToQuiz, navigateToOptions } = useMainContext();

    return (
        <section className='main-menu'>
            <h1>Trivia Quiz</h1>
            <button onClick={() => navigateToQuiz(modes.Standard)}>Standard</button>
            <button onClick={() => navigateToQuiz(modes.Time)}>Timed</button>
            <button onClick={() => navigateToQuiz(modes.Marathon)}>Marathon</button>
            <button onClick={navigateToOptions}>Options</button>
        </section>
    );
};

export default MainMenu;
