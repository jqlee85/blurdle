// Data Model Brainstorm

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
  
  export interface GameState {
    gameStatus: "uninitialized" | "won" | "lost" | "expired";
    currRow: number; // Necessary, or should this be derived from rowsState?
    rowsState: [RowState];
    revealedInfo: RevealedInfo;
  }
  
  export interface RevealedInfo {
    charsInfo: [CharInfo];
  }
  
  export interface CharInfo {
    char: Char;
    bestInfo: CharEvaluatedState;
  }
  
  export interface ValidChars {
    charSet: Charset;
  }
  
  export interface GameSolution {
    solutionChars: [Char];
    numChars: number;
    charSet: Charset;
  }
  
  export interface Charset {
    chars: [string];
  }
  
  export interface Char {
    index: number;
    char: string;
  }
  
  export interface RowState {
    rowIndex: number;
    rowStatus: "uninitialized" | "active" | "submitting" | "evaluated";
    currentSpaceIndex: number;
    guess: string;
    spacesStates: [SpaceState];
  }
  
  export interface SpaceState {
    spaceIndex: number;
    spaceChar?: string;
    spaceStatus: "empty" | "guess" | "evaluated";
    charEvaluatedState: SpaceCharEvaluatedState;
  }

// Evaluated space enum
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

