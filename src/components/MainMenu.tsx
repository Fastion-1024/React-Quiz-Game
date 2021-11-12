import { useMainContext } from '../hooks/mainContext';
import { modes } from '../lib/enums';

const MainMenu: React.FC = () => {
    const { navigateToQuiz, navigateToOptions } = useMainContext();

    return (
        <section className='flex flex-col justify-center h-full w-full'>
            <h1 className='text-center text-4xl mb-16'>Trivia Quiz</h1>
            <div className='flex flex-col space-y-5'>
                <button className='btn-standard' onClick={() => navigateToQuiz(modes.Standard)}>
                    Standard
                </button>
                <button className='btn-standard' onClick={() => navigateToQuiz(modes.Time)}>
                    Timed
                </button>
                <button className='btn-standard' onClick={() => navigateToQuiz(modes.Marathon)}>
                    Marathon
                </button>
                <button className='btn-standard' onClick={navigateToOptions}>
                    Options
                </button>
            </div>
        </section>
    );
};

export default MainMenu;
