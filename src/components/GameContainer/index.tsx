import {useContext,useEffect,useState} from 'react';
import './styles.scss';
import BoardContainer from '../BoardContainer';
import Keyboard from '../Keyboard';
import {GameContext} from '../../context/GameContext';
import { GAME_STATUS, VALID_CHARS } from '../../constants';
import GameOverModal from '../GameOverModal';
import {isValidWord} from '../../data/all-five-letter-words';


const GameContainer = () => {
    
    const {state: {currRow, gameStatus, gameSolution, rowsState, validationErrorMessage}, dispatch} = useContext(GameContext);
    
    useEffect(()=>{
        let timer: ReturnType<typeof setTimeout>;

        if (validationErrorMessage !== ''){
            timer = setTimeout(()=>{
                dispatch({
                    type:'WORD_VALIDATION_ERROR',
                    payload: {
                        message: '',
                    }
                });
            },2000);
        }

        return ()=>clearTimeout(timer);
    },[validationErrorMessage])

    // Handle key presses (for adding leters and submitting guesses)
    const handleSpaceKeyPress = (e:React.KeyboardEvent<HTMLElement>) => {
        const keyPressed = e.key;

        // If enter, submit
        if (keyPressed === 'Enter') {
            
            // Ensure guess is correct length, if so submit guess for evaluation 
            const currentGuess = rowsState[currRow].guess;

            if (currentGuess.length !== gameSolution.wordLength){
                dispatch({
                    type:'WORD_VALIDATION_ERROR',
                    payload: {
                        message: 'Not enough letters',
                    }
                });
            } else if (!isValidWord(currentGuess)) {
                dispatch({
                    type:'WORD_VALIDATION_ERROR',
                    payload: {
                        message: 'Not in word list',
                    }
                });
            }
            else {
                dispatch({type:'SUBMIT_GUESS',payload:{}})
            }
        }
        if ( VALID_CHARS.EN.includes(keyPressed.toUpperCase()) ) {
            dispatch(
                { 
                    type: 'UPDATE_SPACE',
                    payload: {
                        char: keyPressed.toUpperCase(),
                        rowIndex: currRow,
                        spaceIndex: rowsState[currRow].currentSpaceIndex
                    }
                }
            );
        }
    }

    // Handle keyDown events (necessary for detecting delete key)
    const handleOnKeyDown = (e:React.KeyboardEvent<HTMLElement>)=>{
        const keyPressed = e.key;
        if (keyPressed === 'Backspace') {
            dispatch({
                type: "BACKSPACE",
                payload: { 
                    rowIndex: currRow,
                    spaceIndex: rowsState[currRow].currentSpaceIndex
                }
            })
        }
    }

    return (
        <div
            className="blurdle-game-container"
            onKeyPress={handleSpaceKeyPress}
            onKeyDown={handleOnKeyDown}
        >
            {validationErrorMessage && (
                <div className="blurdle-validation-error-message">
                    <p>{validationErrorMessage}</p>
                </div>
            )}   
            <BoardContainer/>
            <Keyboard/>
            {(gameStatus === GAME_STATUS.WON || gameStatus === GAME_STATUS.LOST) &&
                <GameOverModal
                    gameStatus={gameStatus}
                    gameSolution={gameSolution}
                    numGuesses={currRow+1}
                />
            }
        </div>
    );
}

export default GameContainer;