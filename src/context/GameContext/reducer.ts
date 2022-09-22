import {Reducer} from 'react';
import { GameState, IGameAction } from '../../types';

//@ts-ignore (temporarily ignore next line)
const gameReducer: Reducer<GameState, IGameAction> = (draft, action) => {
    console.log(action.type, {draft,action});
    switch (action.type) {
        case 'INITIALIZE': {
            break;
        }
        case 'UPDATE_SPACE': {
            // Update space's value with the character
            const { currentSpaceIndex } = draft.rowsState[draft.currRow];
            draft.rowsState[draft.currRow].spacesStates[currentSpaceIndex].spaceChar = action.payload.char;

            // Advance to next space if possible
            if (currentSpaceIndex < draft.gameSolution.wordLength - 1){
                draft.rowsState[draft.currRow].currentSpaceIndex++; 
            }
            break;
        }
        case 'UPDATE_GUESS': {
            // Assemble guess from filled in spaces
            draft.rowsState[draft.currRow].guess = 'GUESS';
            break;
        }
        case 'BACKSPACE': {
            const { currentSpaceIndex } = draft.rowsState[draft.currRow];

            if (currentSpaceIndex === 0) break; // Early return if no chars (first space is focused)

            // If row is not full, delete last filled space and decrement current space index
            if (
                draft.rowsState[draft.currRow].spacesStates[draft.gameSolution.wordLength-1].spaceChar === ''
            ) {
                const spaceToDelete:number = draft.rowsState[draft.currRow].currentSpaceIndex - 1 ;
                draft.rowsState[draft.currRow].spacesStates[spaceToDelete].spaceChar = '';
                draft.rowsState[draft.currRow].currentSpaceIndex--; 
            }
            // Otherwise (if on last space and it's full), delete the current space and leave it focused
            else {
                draft.rowsState[draft.currRow].spacesStates[draft.rowsState[draft.currRow].currentSpaceIndex].spaceChar = '';
            }

            break;
        }
        case 'SUBMIT_GUESS': {
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