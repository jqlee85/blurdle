import {
  GAME_STATUS,
  ROW_STATUS,
  CHAR_EVALUATED_STATE
} from './constants';

export interface IGameDataResponse {
    type: 'ERROR' | 'SUCCESS',
    data: {
        message?: string;
        gameData?: GameData;
    }
}

export type GamesDataType = {
    [key:string]: GameData;
}

export type ValidChars = {
  [key:string]: string[];
}

export interface GameData {
    wordLength: number;
    solution: string;
    charSet: string;
}

// Possible statuses for the game
export type GameStatus = 
  | GAME_STATUS.UNINITIALIZED
  | GAME_STATUS.IN_PROGRESS
  | GAME_STATUS.WON
  | GAME_STATUS.LOST
  | GAME_STATUS.EXPIRED;

export interface GameState {
  gameStatus: GameStatus;
  currRow: number; // Necessary, or should this be derived from rowsState?
  rowsState: RowState[];
  revealedCharsInfo: RevealedCharsInfo;
  gameSolution: GameSolution;
}

export type RevealedCharsInfo = {
  [key:string]: CharInfo;
}
  
export interface CharInfo {
  bestInfo: KeyboardCharEvaluatedState;
}

export interface GameSolution {
  solution: string;
  wordLength: number;
}

export interface Charset {
  chars: string[];
}

export interface Char {
  index: number;
  char: string;
}

export interface RowState {
  rowIndex: number;
  rowStatus: RowStatus;
  currentSpaceIndex: number;
  guess: string;
  spacesStates: SpaceState[];
}

export interface SpaceState {
  spaceIndex: number;
  spaceChar: string;
  charEvaluatedState: SpaceCharEvaluatedState;
}

export type RowStatus =
  | ROW_STATUS.UNINITIALIZED
  | ROW_STATUS.ACTIVE
  | ROW_STATUS.SUBMITTING
  | ROW_STATUS.EVALUATED;

// Evaluated states for spaces
export type SpaceCharEvaluatedState =
    | CHAR_EVALUATED_STATE.UNEVALUATED
    | CHAR_EVALUATED_STATE.CORRECT
    | CHAR_EVALUATED_STATE.INCORRECT
    | CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK
    | CHAR_EVALUATED_STATE.WRONG_SPOT_OUT_OF_STOCK;

// Evaluated states for keyboard characters
export type KeyboardCharEvaluatedState =
  | CHAR_EVALUATED_STATE.UNEVALUATED
  | CHAR_EVALUATED_STATE.CORRECT
  | CHAR_EVALUATED_STATE.INCORRECT
  | CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK;

export interface EvaluatedChar {
    char: string;
    charIndex: number;
    evaluation: SpaceCharEvaluatedState;
}

export interface IEvaluatedGuess {
    isCorrect: boolean;
    evaluatedChars: EvaluatedChar[];
}

export interface IGameAction {
    type: string;
    payload: any;
}

export interface KeyboardButtonData {
  type: 'letter' | 'submit' | 'backspace';
  size: 'sm' | 'md' | 'lg';
  value: string;
}

export type KeyboardRow = KeyboardButtonData[];
;