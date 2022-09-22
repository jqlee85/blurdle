import {Reducer} from 'react';
import { GameState } from '../../types-brainstorm';

export interface IGameAction {
    type: string;
    payload: any;
}

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