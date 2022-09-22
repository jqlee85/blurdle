import {Reducer} from 'react';
import { GameState, IGameAction } from '../../types';

const gameReducer: Reducer<GameState, IGameAction> = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE': {
            return {...state};
        }
        default: {
            return {...state};
        }
    }
}

export default gameReducer;