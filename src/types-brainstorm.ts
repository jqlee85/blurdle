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
    charEvaluatedState: CharEvaluatedState;
  }
  
  export type CharEvaluatedState =
    | "unevaluated"
    | "correct"
    | "incorrect"
    | "wrong_spot_in_stock"
    | "wrong_spot_out_of_stock";
