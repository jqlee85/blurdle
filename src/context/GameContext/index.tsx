import React, {useReducer, useState} from "react";
import gameReducer from './reducer';
import createInitialGameState from './create-initial-game-state';
import {GameData} from '../../types';

export const GameContext = React.createContext({
    state: {},
    dispatch: (action:any)=>{}
});

export interface IGameContextProviderProps {
    gameData: GameData;
    children?: React.ReactNode | React.ReactNode[];
}

const GameContextProvider = ({
    gameData,
    children,
}:IGameContextProviderProps) => {

    // Overall game state
    const [state, dispatch] = useReducer(gameReducer, createInitialGameState(gameData));

    return <GameContext.Provider
        value={{state, dispatch}}
    >
        {children}
    </GameContext.Provider>;
}

export default GameContextProvider;