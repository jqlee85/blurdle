

// Temp object containing game data for different dates
type GamesDataType = {
    [key:string]: GameData;
}

export interface GameData {
    wordSize: number;
    solution: string;
}

const gamesData:GamesDataType = {
    ['2022_09_21']: {
        wordSize: 5,
        solution: 'BREAD'
    },
    ['2022_09_22']: {
        wordSize: 5,
        solution: 'JOUST'
    },
    ['2022_09_23']: {
        wordSize: 5,
        solution: 'HEARD',
    },
    ['2022_09_24']: {
        wordSize: 5,
        solution: 'LEAST',
    },
};

export interface IGameDataResponse {
    type: 'ERROR' | 'SUCCESS',
    data: {
        message?: string;
        gameData?: GameData;
    }
}

// Gets the initial game data to populate the board
export const getGameData = (date:string = '2022_09_21'): IGameDataResponse => {
    
    if (!Object.keys(gamesData).includes(date)){
        return {
            type: 'ERROR',
            data: {
                message: `No game data found for the date ${date}`,
            }
        }
    }

    const gameData = gamesData[date as keyof GamesDataType]

    return {
        type: 'SUCCESS',
        data: {
            gameData,
        }
    }
}

