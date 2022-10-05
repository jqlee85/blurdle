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
    console.debug(action.type, {draft,action});
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
            
            // const necessaryChars = draft.necessaryChars;
            
            const currentRow = draft.rowsState[draft.currRow];

            // Evaluate guess
            const evaluatedGuess = evaluateGuess(currentRow.guess, draft.gameSolution.solution);

            // Update row with evaluated states
            currentRow.rowStatus = ROW_STATUS.EVALUATED;

            // Update spaces in current row and revealedInfo
            currentRow.spacesStates.forEach((spaceState,i)=>{
                spaceState.charEvaluatedState = evaluatedGuess.evaluatedChars[i].evaluation;
                // Mark best info as correct, or wrong spot, depending on conditions
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

            // Update the necessaryChars (for hard mode)
            
            const tempNecessaryChars = {};

            currentRow.spacesStates.forEach((spaceState,i)=>{
                
                const char = spaceState.spaceChar;
                spaceState.charEvaluatedState = evaluatedGuess.evaluatedChars[i].evaluation;

                // If character is present add to the frequency map
                if (spaceState.charEvaluatedState !== CHAR_EVALUATED_STATE.INCORRECT) {
                    if (tempNecessaryChars[char]) {
                        tempNecessaryChars[char]++;
                    } else {
                        tempNecessaryChars[char] = 1;
                    }
                }


            });

            // Update the game state
            draft.necessaryChars = tempNecessaryChars;

            // If win, update game state
            if (evaluatedGuess.isCorrect) {
                draft.gameStatus = GAME_STATUS.WON
            }


            // If not win, and last row, update game state as loss
            if (!evaluatedGuess.isCorrect && draft.currRow === draft.rowsState.length - 1) {
                draft.gameStatus = GAME_STATUS.LOST
            }

            // If not win and not last row, increment current row
            if (!evaluatedGuess.isCorrect && draft.currRow < draft.rowsState.length - 1) {
                draft.currRow++;
            }
            break;
        }
        case 'WORD_VALIDATION_ERROR': {
            draft.validationErrorMessage = action.payload.message;
            
            break;
        }
        default: {
            break;
        }
    }
}

export default gameReducer;
