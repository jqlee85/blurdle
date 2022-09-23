import { IEvaluatedGuess } from '../types';
import {CHAR_EVALUATED_STATE} from '../constants';

const evaluateGuess = (guess:string, solution:string):IEvaluatedGuess => {

    const guessChars: string[] = guess.split('');
    const solutionChars: string[] = solution.split('');

    // Create frequency map of remaining characters for knowing if chars are "in stock" or not
    const remainingSolutionCharsFreqMap:{
        [key:string]: number;
    } = {};
    solutionChars.forEach(char=>{
        if (!remainingSolutionCharsFreqMap[char]) remainingSolutionCharsFreqMap[char] = 1;
        else {remainingSolutionCharsFreqMap[char]++;}
    })

    // Guess is correct
    if (guess === solution) {
        return {
            isCorrect: true,
            evaluatedChars: guessChars.map((guessChar,i)=>({
                char: guessChar,
                charIndex: i,
                evaluation: CHAR_EVALUATED_STATE.CORRECT
            }))
        }
    }

    // TODO fix case where a letter is incorrect, but marked yellow BEFORE you get the the correct spot where the letter is correct and that one is marked green
    // IE: guesses 'EEEEE` for `HEARD`

    // Guess is incorrect
    return {
        isCorrect: false,
        evaluatedChars: guessChars.map((guessChar,i)=>{

            // Default case, character is incorrect
            let evaluationResult = CHAR_EVALUATED_STATE.INCORRECT;

            // If character is correct and in correct location
            if (guessChar === solutionChars[i]) {
                evaluationResult = CHAR_EVALUATED_STATE.CORRECT;
                remainingSolutionCharsFreqMap[guessChar]--;
            }

            // If char is in word, but in incorrect location
            if ( guessChar !== solutionChars[i] && typeof remainingSolutionCharsFreqMap[guessChar] !== 'undefined') {
                // If letter is "in stock"
                if ( remainingSolutionCharsFreqMap[guessChar] > 0 ) {
                    evaluationResult = CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK;
                    // Decrement stock count
                    remainingSolutionCharsFreqMap[guessChar]--;
                }
                // If char location is incorrect and letter is "out of stock"
                else if ( remainingSolutionCharsFreqMap[guessChar] === 0 ) {
                    evaluationResult = CHAR_EVALUATED_STATE.WRONG_SPOT_OUT_OF_STOCK;
                }   
            }

            return {
                char: guessChar,
                charIndex: i,
                evaluation: evaluationResult
            } 
        })
    }

}

export default evaluateGuess;

