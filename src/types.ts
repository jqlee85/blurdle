// Data Model Brainstorm

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

export interface GameData {
    wordSize: number;
    solution: string;
}

export interface Game {
    id: GameID;
    user: UserID; // TODO user functionality if there's time
    gameSettings: GameSettings;
    gameState: GameState;
  }
  
  export type GameID = string;
  
  export type UserID = string;
  
  export interface GameSettings {
    gameDate: Date;
    numLetters: number;
    numRows: number;
    validChars: ValidChars;
    gameSolution: GameSolution;
  }

// Possible statuses for the game
export enum GAME_STATUS {
    UNINITIALIZED = 'UNINITIALIZED',
    IN_PROGRESS = 'IN_PROGRESS',
    WON = 'WON',
    LOST = 'LOST',
    EXPIRED = 'EXPIRED',
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
    revealedInfo: RevealedInfo;
    gameSolution: GameSolution;
  }
  
  export interface RevealedInfo {
    charsInfo: CharInfo[];
  }
  
  export interface CharInfo {
    char: Char;
    bestInfo: KeyboardCharEvaluatedState;
  }
  
  export interface ValidChars {
    charSet: Charset;
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
    spaceStatus: SpaceStatus;
    charEvaluatedState: SpaceCharEvaluatedState;
  }

export enum ROW_STATUS {
  UNINITIALIZED,
  ACTIVE,
  SUBMITTING,
  EVALUATED
}

export type RowStatus =
  | ROW_STATUS.UNINITIALIZED
  | ROW_STATUS.ACTIVE
  | ROW_STATUS.SUBMITTING
  | ROW_STATUS.EVALUATED


// Space fill status
export enum SPACE_STATUS {
    EMPTY = 'EMPTY',
    GUESS = 'GUESS',
    EVALUATED = 'EVALUATED'
}

export type SpaceStatus = 
  | SPACE_STATUS.EMPTY
  | SPACE_STATUS.GUESS
  | SPACE_STATUS.EVALUATED;

// Evaluated space states enum
export enum CHAR_EVALUATED_STATE {
    UNEVALUATED ='UNEVALUATED',
    CORRECT =  "CORRECT",
    INCORRECT = "INCORRECT",
    WRONG_SPOT_IN_STOCK = "WRONG_SPOT_IN_STOCK",
    WRONG_SPOT_OUT_OF_STOCK = "WRONG_SPOT_OUT_OF_STOCK"
}  

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