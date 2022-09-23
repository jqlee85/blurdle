import {Reducer} from 'react';
import {
    GameState,
    IGameAction
} from '../../types';
import {
    ROW_STATUS,
    GAME_STATUS,
    CHAR_EVALUATED_STATE
} from '../../constants';
import evaluateGuess from '../../utils/evaluate-guess';

//@ts-ignore (temporarily ignore next line)
const gameReducer: Reducer<GameState, IGameAction> = (draft, action) => {
    console.log(action.type, {draft,action});
    switch (action.type) {
        case 'UPDATE_SPACE': {
            const currentRow = draft.rowsState[draft.currRow];
            
            // Update space's value with the character
            const { currentSpaceIndex } = currentRow;
            currentRow.spacesStates[currentSpaceIndex].spaceChar = action.payload.char;

            // Advance to next space if possible
            if (currentSpaceIndex < draft.gameSolution.wordLength - 1){
                currentRow.currentSpaceIndex++; 
            }
            
            // Update Guess
            currentRow.guess = currentRow.spacesStates.map(spaceState=>spaceState.spaceChar).join('');

            break;
        }
        case 'BACKSPACE': {
            const currentRow = draft.rowsState[draft.currRow];
            const { currentSpaceIndex } = draft.rowsState[draft.currRow];

            if (currentSpaceIndex === 0) break; // Early return if no chars (first space is focused)

            // If row is not full, delete last filled space and decrement current space index
            if (
                currentRow.spacesStates[draft.gameSolution.wordLength-1].spaceChar === ''
            ) {
                const spaceToDelete:number = currentRow.currentSpaceIndex - 1 ;
                currentRow.spacesStates[spaceToDelete].spaceChar = '';
                currentRow.currentSpaceIndex--; 
            }
            // Otherwise (if on last space and it's full), delete the current space and leave it focused
            else {
                currentRow.spacesStates[draft.rowsState[draft.currRow].currentSpaceIndex].spaceChar = '';
            }

            // Update Guess
            currentRow.guess = currentRow.spacesStates.map(spaceState=>spaceState.spaceChar).join('');
            break;
        }
        case 'SUBMIT_GUESS': {
            const currentRow = draft.rowsState[draft.currRow];

            console.log('SUBMITTING', currentRow.guess)

            // Evaluate guess
            const evaluatedGuess = evaluateGuess(currentRow.guess, draft.gameSolution.solution);

            // Update row with evaluated states
            currentRow.rowStatus = ROW_STATUS.EVALUATED;

            // Update spaces in current row and revealedInfo
            // TODO fix order issue with multiple letters when some are correct (ex: guessing IIIII for IONIC)
            currentRow.spacesStates.forEach((spaceState,i)=>{
                spaceState.charEvaluatedState = evaluatedGuess.evaluatedChars[i].evaluation;
                // Mark best info as corret, or wrong spot, depending on conditions
                if (evaluatedGuess.evaluatedChars[i].evaluation === CHAR_EVALUATED_STATE.CORRECT) {
                    draft.revealedCharsInfo[spaceState.spaceChar].bestInfo = CHAR_EVALUATED_STATE.CORRECT
                } else if (
                    draft.revealedCharsInfo[spaceState.spaceChar].bestInfo !== CHAR_EVALUATED_STATE.CORRECT &&
                    (
                        evaluatedGuess.evaluatedChars[i].evaluation === CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK
                        || evaluatedGuess.evaluatedChars[i].evaluation === CHAR_EVALUATED_STATE.WRONG_SPOT_OUT_OF_STOCK
                    )
                ) {
                    draft.revealedCharsInfo[spaceState.spaceChar].bestInfo = CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK
                } else if (
                    evaluatedGuess.evaluatedChars[i].evaluation === CHAR_EVALUATED_STATE.INCORRECT
                ){
                    draft.revealedCharsInfo[spaceState.spaceChar].bestInfo = CHAR_EVALUATED_STATE.INCORRECT
                }
            });            

            // If win, update game state
            if (evaluatedGuess.isCorrect) {
                console.log('WON GAME!')
                draft.gameStatus = GAME_STATUS.WON
            }


            // If not win, and last row, update game state as loss
            if (!evaluatedGuess.isCorrect && draft.currRow === draft.rowsState.length - 1) {
                console.log('WRONG GUESS, LOST');
                draft.gameStatus = GAME_STATUS.LOST
            }

            // If not win and not last row, increment current row
            if (!evaluatedGuess.isCorrect && draft.currRow < draft.rowsState.length - 1) {
                console.log('WRONG GUESS, NEXT ROW');
                draft.currRow++;
            }
            break;
        }
        case 'DISPLAY_VALIDATION_MESSAGE': {
            break;
        }
        default: {
            break;
        }
    }
}

export default gameReducer;
