import React, {useReducer, useState, Dispatch} from "react";
import gameReducer from './reducer';
import { useImmerReducer } from 'use-immer';
import createInitialGameState from './create-initial-game-state';
import {GameData, GameState, IGameAction} from '../../types';


export const GameContext = React.createContext<{state: GameState, dispatch: Dispatch<IGameAction>}>({
    state: {} as GameState,
    dispatch: {} as Dispatch<IGameAction>,
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
    const [state, dispatch] = useImmerReducer(gameReducer, createInitialGameState(gameData));
    console.log({state})

    return <GameContext.Provider
        value={{state, dispatch}}
    >
        {children}
    </GameContext.Provider>;
}

export default GameContextProvider;