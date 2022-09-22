

import {GamesDataType, IGameDataResponse} from "../types";

// Temp object containing game data for different dates

const gamesData:GamesDataType = {
    ['2022_09_21']: {
        wordLength: 5,
        solution: 'BREAD'
    },
    ['2022_09_22']: {
        wordLength: 5,
        solution: 'JOUST'
    },
    ['2022_09_23']: {
        wordLength: 5,
        solution: 'HEARD',
    },
    ['2022_09_24']: {
        wordLength: 5,
        solution: 'LEAST',
    },
};

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

