import {GAME_STATUS, SPACE_STATUS, CHAR_EVALUATED_STATE, GameState, GameData} from '../../types';

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

export default createInitialGameState