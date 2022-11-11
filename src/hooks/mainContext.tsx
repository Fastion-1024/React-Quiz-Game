import React, { useContext, useState } from 'react';
import { components } from '../lib/enums';
import { IGameOptions } from '../lib/interfaces';
import { modes } from '../lib/enums';

type ContextType = {
    activeComponent: components;
    gameOptions: IGameOptions;
    fetchURL: string;
    gameMode: modes;
    navigateToMainMenu: () => void;
    navigateToOptions: () => void;
    navigateToQuiz: (mode: modes) => void;
    updateGameOptions: (gameOptions: IGameOptions) => void;
};

interface Props {
    children: React.ReactNode;
}

const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<Props> = ({ children }) => {
    const [activeComponent, setActiveComponent] = useState(
        components.Main_Menu
    );
    const [gameOptions, setGameOptions] = useState<IGameOptions>({
        category: '',
        difficulty: '',
        type: '',
        amount: 10,
    });
    const [fetchURL, setFetchURL] = useState(
        'https://opentdb.com/api.php?amount=10&encode=url3986'
    );
    const [gameMode, setGameMode] = useState(modes.Standard);

    const navigateToMainMenu = (): void => {
        setActiveComponent(components.Main_Menu);
    };

    const navigateToOptions = (): void => {
        setActiveComponent(components.Options);
    };

    const navigateToQuiz = (mode: modes): void => {
        setActiveComponent(components.Quiz);
        setGameMode(mode);

        if (mode === modes.Marathon) {
            setFetchURL(
                getFetchURL({
                    ...gameOptions,
                    category: '',
                    type: 'multiple',
                    amount: 50,
                })
            );
        }
    };

    const updateGameOptions = (gameOptions: IGameOptions) => {
        setGameOptions(gameOptions);
        setFetchURL(getFetchURL(gameOptions));
    };

    const getFetchURL = (gameOptions: IGameOptions): string => {
        let paramsObj = {};

        if (gameOptions.category)
            paramsObj = { ...paramsObj, category: gameOptions.category };
        if (gameOptions.difficulty)
            paramsObj = { ...paramsObj, difficulty: gameOptions.difficulty };
        if (gameOptions.type)
            paramsObj = { ...paramsObj, type: gameOptions.type };
        paramsObj = { ...paramsObj, amount: gameOptions.amount };
        paramsObj = { ...paramsObj, encode: 'url3986' };
        const params = new URLSearchParams(paramsObj);

        console.log(`https://opentdb.com/api.php?${params}`);
        return `https://opentdb.com/api.php?${params}`;
    };

    return (
        <AppContext.Provider
            value={{
                activeComponent,
                gameOptions,
                fetchURL,
                gameMode,
                navigateToMainMenu,
                navigateToOptions,
                navigateToQuiz,
                updateGameOptions,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useMainContext = () => {
    return useContext(AppContext) as ContextType;
};

export default AppProvider;
