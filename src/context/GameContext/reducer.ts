import {Reducer} from 'react';
import { GameState, IGameAction } from '../../types';

const gameReducer: Reducer<GameState, IGameAction> = (state, action) => {
    console.log(action.type, {state,action});
    switch (action.type) {
        case 'INITIALIZE': {
            return {...state};
        }
        case 'UPDATE_SPACE': {
            return {...state};
        }
        case 'UPDATE_GUESS': {
            return {...state};
        }
        case 'BACKSPACE': {
            return {...state};
        }
        case 'SUBMIT_GUESS': {
            return {...state}
        }
        case 'DISPLAY_VALIDATION_MESSAGE': {
            return {...state}
        }
        default: {
            return {...state};
        }
    }
}

export default gameReducer;