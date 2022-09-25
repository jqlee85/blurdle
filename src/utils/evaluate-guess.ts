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

    // Guess is incorrect

    /* First Arrange indexes of chars with the correct chars first, then the rest in their normal order
    This is so we check correct characters first, and don't mark present ones yellow and then later green if there is a second occurrence
    NOTE: We have to re-set the order of the evaluated characters later to make sure chars are in the right order */
    const indexesWithCorrectFirst: number[] = [];
    guessChars.forEach((guessChar,i)=>{ if (guessChar === solutionChars[i]) indexesWithCorrectFirst.push(i);});
    guessChars.forEach((guessChar,i)=>{if (guessChar !== solutionChars[i]) indexesWithCorrectFirst.push(i);})

    // Evaluate chars, starting with correct ones
    const evaluatedChars = indexesWithCorrectFirst.map((i)=>{

        const guessChar = guessChars[i];

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
    
    // Important: Re-sort chars into correct order (since we changed the order above)
    evaluatedChars.sort((a, b) => (a.charIndex > b.charIndex) ? 1 : -1)

    return {
        isCorrect: false,
        evaluatedChars,
    }

}

export default evaluateGuess;

