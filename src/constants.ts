import {ValidChars} from './types';

export const NUM_GUESSES:number = 6;
export const DEFAULT_WORD_LENGTH = 5;
export const VALID_CHARS:ValidChars = {
    'EN': ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
}

// Possible statuses for the game
export enum GAME_STATUS {
    UNINITIALIZED = 'UNINITIALIZED',
    IN_PROGRESS = 'IN_PROGRESS',
    WON = 'WON',
    LOST = 'LOST',
    EXPIRED = 'EXPIRED',
}

//
export enum ROW_STATUS {
    UNINITIALIZED = 'UNINITIALIZED',
    ACTIVE = 'ACTIVE',
    SUBMITTING = 'SUBMITTING',
    EVALUATED = 'EVALUATE'
}

// Evaluated space states enum
export enum CHAR_EVALUATED_STATE {
    UNEVALUATED = 'UNEVALUATED',
    CORRECT = 'CORRECT',
    INCORRECT = 'INCORRECT',
    WRONG_SPOT_IN_STOCK = 'WRONG_SPOT_IN_STOCK',
    WRONG_SPOT_OUT_OF_STOCK = 'WRONG_SPOT_OUT_OF_STOCK',
}  