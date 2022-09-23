

import {GamesDataType, IGameDataResponse} from "../types";
import {getFormattedDate} from './date-utils';
import answers from '../data/answers';

// Generated a list of answers corresponding to date strings
export const generateGameData = (answers:string[],startDateString:string = '2022_09_21'):GamesDataType => {
    const nums = startDateString.split('_');
    const year = parseInt(nums[0]);
    const month = parseInt(nums[1]);
    const day = parseInt(nums[2]);
    let date = new Date(year, month - 1, day);
    const gamesData:GamesDataType = {}

    answers.forEach((answer,i)=>{
        if (i > 0) date.setDate(date.getDate() + 1);
        gamesData[getFormattedDate(date)] = {
            wordLength: answer.length,
            charSet: 'EN',
            solution: answer,
        }
    })

    return gamesData;
}

// Gets the initial game data to populate the board
export const getGameData = (date:string = '2022_09_21'): IGameDataResponse => {
    
    const gamesData = generateGameData(answers);

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

