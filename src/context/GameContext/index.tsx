import React, {useReducer, useState} from "react";
import {GameData} from '../../utils/game-data';
import {GAME_STATUS, SPACE_STATUS, CHAR_EVALUATED_STATE, GameState} from '../../types-brainstorm';
import gameReducer from './reducer';

// TODO create initial state properly
const createInitialGameState = (gameData:GameData): GameState=>{
    return {
        gameStatus: GAME_STATUS.UNINITIALIZED,
        currRow: 0,
        rowsState: [
            {
                rowIndex: 0,
                rowStatus: 'uninitialized',
                currentSpaceIndex: 0,
                guess: '',
                spacesStates: [{
                    spaceIndex: 0,
                    spaceChar:'',
                    spaceStatus: SPACE_STATUS.EMPTY,
                    charEvaluatedState: CHAR_EVALUATED_STATE.UNEVALUATED
                }],
            }
        ],
        revealedInfo: {
            charsInfo: [{
                char: {
                    index:0,
                    char:'',
                },
                bestInfo: CHAR_EVALUATED_STATE.UNEVALUATED ,
            }]
        },
      }
}


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