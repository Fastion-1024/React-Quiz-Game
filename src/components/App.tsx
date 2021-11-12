import MainMenu from './MainMenu';
import Options from './Options';
import Quiz from './Quiz';
import { components } from '../lib/enums';
import { useMainContext } from '../hooks/mainContext';

// The navigator of the app.
// Displays the correct component based on the activeComponent state.
function App() {
    const { activeComponent, fetchURL, gameMode } = useMainContext();
    return (
        <main className='h-screen w-screen flex justify-center items-center'>
            {activeComponent === components.Main_Menu && <MainMenu />}
            {activeComponent === components.Options && <Options />}
            {activeComponent === components.Quiz && <Quiz url={fetchURL} mode={gameMode} />}
        </main>
    );
}

export default App;
