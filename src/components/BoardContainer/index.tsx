import './styles.scss';
import {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import Row from '../Row';
import {RowState,GameSolution} from '../../types';

export interface IBoardContainerProps {
    gameSolution: GameSolution;
}

export default ({
    gameSolution
}:IBoardContainerProps) => {
    
    const {state: {rowsState, gameSolution: {wordLength}}, dispatch} = useContext(GameContext);
    
    // Handler for when a row's guess is submitted
    const onRowSubmitHandler = (
        rowIndex: number,
        guess: string,
    ) => {
        console.log(`Submitting row ${rowIndex} with ${guess}`);

        // TODO implement more robust validation
        if (isGuessValid(guess,wordLength)) {
            // If guess is valid, submit guess for evaluation
            dispatch({
                type: 'SUBMIT_GUESS',
                payload: {
                    guess,
                }
            })
        } else {
            // If guess is invalid, display validation message
            dispatch({
                type: 'DISPLAY_VALIDATION_MESSAGE',
                payload: {
                    message: "Invalid word, please try again."
                }
            })
        }
    }

    return (
        <div className="blurdle-board-container">
            {rowsState.map((rowState:RowState,i:number)=>{
                return <Row 
                    key={`row-${i}`}
                    rowState={rowState}
                    onSubmitHandler={onRowSubmitHandler}
                />})}
        </div>
    );
}

// Checks if a given guess is valid
const isGuessValid = (guess:string, wordLength:number ):boolean => {
    // TODO check if valid word

    // Check if length is correct
    if (guess.length === wordLength) return true;
    return false;
}