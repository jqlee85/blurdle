import {
    GameState,
    GameData,
    RowState,
    SpaceState,
    RevealedCharsInfo,
} from '../../types';
import {
    GAME_STATUS,
    CHAR_EVALUATED_STATE,
    NUM_GUESSES,
    VALID_CHARS,
    ROW_STATUS,
} from '../../constants';

// TODO create initial state properly
const createInitialGameState = (gameData:GameData): GameState=>{
    return {
        gameStatus: GAME_STATUS.UNINITIALIZED,
        currRow: 0,
        rowsState: createRowsState(gameData),
        revealedCharsInfo: createInitialRevealedCharsInfo(gameData),
        gameSolution: {
            solution: gameData.solution,
            wordLength: gameData.wordLength,
        },
        validationErrorMessage: '',
      }
}

const createRowsState = (gameData:GameData, numRows:number = NUM_GUESSES):RowState[] => {
    const rows = [];
    for (let i = 0; i < NUM_GUESSES;i++){
        rows.push({
            rowIndex: i,
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
    for (let i = 0; i < gameData.wordLength;i++){
        spaces.push({
            spaceIndex: i,
            spaceChar: '',
            charEvaluatedState: CHAR_EVALUATED_STATE.UNEVALUATED,
        });
    }
    return spaces;
}

const createInitialRevealedCharsInfo = (gameData:GameData):RevealedCharsInfo => {
    const charSet = VALID_CHARS[gameData.charSet];

    const revealedCharsInfo: RevealedCharsInfo = {};
    charSet.forEach(
        char => {revealedCharsInfo[char] = { bestInfo: CHAR_EVALUATED_STATE.UNEVALUATED }}
    );
    return revealedCharsInfo;

}


export default createInitialGameState