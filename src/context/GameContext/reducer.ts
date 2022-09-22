import {Reducer} from 'react';
import { GameState, IGameAction } from '../../types';

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

            // Evaluate guess here

            // Update row with evaluated states

            // Update bestInfo and keyboard data with best info available for each char

            // If win, update game state

            // If not win, and last row, update game state as loss


            // If not win and not last row, increment current row


            return {...draft}
        }
        case 'DISPLAY_VALIDATION_MESSAGE': {
            return {...draft}
        }
        default: {
            break;
        }
    }
}

export default gameReducer;