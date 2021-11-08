import MainMenu from './MainMenu';
import Options from './Options';
import Quiz from './Quiz';
import { components, modes } from '../lib/enums';
import { useMainContext } from '../hooks/mainContext';

// The navigator of the app.
// Displays the correct component based on the activeComponent state.
function App() {
    const { activeComponent, fetchURL } = useMainContext();
    return (
        <main>
            {activeComponent === components.Main_Menu && <MainMenu />}
            {activeComponent === components.Options && <Options />}
            {activeComponent === components.Quiz && <Quiz url={fetchURL} mode={modes.Standard} />}
        </main>
    );
}

export default App;
