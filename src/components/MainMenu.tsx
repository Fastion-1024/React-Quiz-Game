import { modes } from '../lib/enums';
import { useMainContext } from '../hooks/mainContext';

const MainMenu: React.FC = () => {
    const {
        navigateToStandardGame,
        navigateToTimeGame,
        navigateToScoreGame,
        navigateToMarathonGame,
        navigateToOptions,
    } = useMainContext();

    return (
        <section className='main-menu'>
            <h1>Trivia Quiz</h1>
            <button onClick={navigateToStandardGame}>Standard</button>
            <button onClick={navigateToTimeGame}>Time Attack</button>
            <button onClick={navigateToScoreGame}>Score</button>
            <button onClick={navigateToMarathonGame}>Marathon</button>
            <button onClick={navigateToOptions}>Options</button>
        </section>
    );
};

export default MainMenu;
