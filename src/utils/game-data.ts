

import {GamesDataType, IGameDataResponse} from "../types";

// Temp object containing game data for different dates

const gamesData:GamesDataType = {
    ['2022_09_21']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'BREAD'
    },
    ['2022_09_22']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'JOUST'
    },
    ['2022_09_23']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'HEARD',
    },
    ['2022_09_24']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'LEAST',
    },
    ['2022_09_25']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'GREAT'
    },
    ['2022_09_26']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'ALGAE'
    },
    ['2022_09_27']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'SCOOT',
    },
    ['2022_09_28']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'ROAST',
    },
    ['2022_09_29']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'WAGON'
    },
    ['2022_09_30']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'KOOKY'
    },
    ['2022_10_01']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'IONIC',
    },
    ['2022_10_02']: {
        wordLength: 5,
        charSet: 'EN',
        solution: 'BRAKE',
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
            gameData: gameData ? gameData : { 
                wordLength: 5,
                charSet: 'EN',
                solution:'SHELL'
            },
        }
    }
}

