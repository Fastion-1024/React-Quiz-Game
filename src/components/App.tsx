import MainMenu from './MainMenu';
import Options from './Options';
import StandardQuiz from './StandardQuiz';
import { components } from '../lib/enums';
import { useMainContext } from '../hooks/mainContext';

// The navigator of the app.
// Displays the correct component based on the activeComponent state.
function App() {
    const { activeComponent, fetchURL } = useMainContext();
    return (
        <main>
            {activeComponent === components.Main_Menu && <MainMenu />}
            {activeComponent === components.Options && <Options />}
            {activeComponent === components.Standard_Quiz && <StandardQuiz url={fetchURL} />}
        </main>
    );
}

export default App;
