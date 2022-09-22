import {GAME_STATUS,
    SPACE_STATUS,
    CHAR_EVALUATED_STATE,
    GameState,
    GameData,
    RowState,
    SpaceState,
    ROW_STATUS,
    RowStatus
} from '../../types';

import {NUM_GUESSES} from '../../constants';

// TODO create initial state properly
const createInitialGameState = (gameData:GameData): GameState=>{
    return {
        gameStatus: GAME_STATUS.UNINITIALIZED,
        currRow: 0,
        rowsState: createRowsState(gameData),
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

const createRowsState = (gameData:GameData, numRows:number = NUM_GUESSES):RowState[] => {
    const rows = [];
    for (let i = 0; i < NUM_GUESSES;i++){
        rows.push({
            rowIndex: 0,
            rowStatus: ROW_STATUS.UNINITIALIZED,
            currentSpaceIndex: 0,
            guess: '',
            spacesStates: createSpacesState(gameData),
        });
    }
    return rows;
}

const createSpacesState = (gameData:GameData, numRows:number = NUM_GUESSES):SpaceState[] => {
    const spaces = [];
    for (let i = 0; i < gameData.wordSize;i++){
        spaces.push({
            spaceIndex: 0,
            spaceChar: '',
            spaceStatus: SPACE_STATUS.EMPTY,
            charEvaluatedState: CHAR_EVALUATED_STATE.UNEVALUATED,
        });
    }
    return spaces;
}



export default createInitialGameState