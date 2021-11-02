import React, { useContext, useState } from 'react';
import { components } from '../lib/enums';
import { IGameOptions } from '../lib/interfaces';

type ContextType = {
    activeComponent: components;
    gameOptions: IGameOptions;
    fetchURL: string;
    navigateToMainMenu: () => void;
    navigateToOptions: () => void;
    navigateToStandardGame: () => void;
    navigateToTimeGame: () => void;
    navigateToScoreGame: () => void;
    navigateToMarathonGame: () => void;
    updateGameOptions: (gameOptions: IGameOptions) => void;
};

const AppContext = React.createContext<ContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [activeComponent, setActiveComponent] = useState(components.Main_Menu);
    const [gameOptions, setGameOptions] = useState<IGameOptions>({
        category: '',
        difficulty: '',
        type: '',
        amount: 10,
    });
    const [fetchURL, setFetchURL] = useState(
        'https://opentdb.com/api.php?amount=10&encode=url3986'
    );

    const navigateToMainMenu = (): void => {
        setActiveComponent(components.Main_Menu);
    };

    const navigateToOptions = (): void => {
        setActiveComponent(components.Options);
    };

    const navigateToStandardGame = (): void => {
        setActiveComponent(components.Standard_Quiz);
    };

    const navigateToTimeGame = (): void => {
        setActiveComponent(components.Time_Quiz);
    };

    const navigateToScoreGame = (): void => {
        setActiveComponent(components.Score_Quiz);
    };

    const navigateToMarathonGame = (): void => {
        setActiveComponent(components.Marathon_Quiz);
    };

    const updateGameOptions = (gameOptions: IGameOptions) => {
        setGameOptions(gameOptions);
        setFetchURL(getFetchURL(gameOptions));
    };

    const getFetchURL = (gameOptions: IGameOptions): string => {
        let paramsObj = {};

        if (gameOptions.category) paramsObj = { ...paramsObj, category: gameOptions.category };
        if (gameOptions.category) paramsObj = { ...paramsObj, difficulty: gameOptions.difficulty };
        if (gameOptions.category) paramsObj = { ...paramsObj, type: gameOptions.type };
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
                navigateToMainMenu,
                navigateToOptions,
                navigateToStandardGame,
                navigateToScoreGame,
                navigateToTimeGame,
                navigateToMarathonGame,
                updateGameOptions,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useMainContext = () => {
    return useContext(AppContext) as ContextType;
};

export default AppProvider;
