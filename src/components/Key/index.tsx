import './styles.scss';
import { KeyboardButtonData } from '../../types';
import { CHAR_EVALUATED_STATE } from '../../constants';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { isValidWord } from '../../data/all-five-letter-words';

export interface ILetterProps {
    buttonData: KeyboardButtonData;
}

const Key = ({
    buttonData,
}:ILetterProps) => {
    
    const {state, dispatch} = useContext(GameContext);
    const {revealedCharsInfo} = state;
    const {value, type} = buttonData;


    const evaluatedState = (type ==='letter')
        ? revealedCharsInfo[value].bestInfo
        : CHAR_EVALUATED_STATE.UNEVALUATED;

    // Handle clicks on letter buttons and update the "form"
    const letterOnClickHandler = (buttonData: KeyboardButtonData) => {
        if (buttonData.type === 'letter') {
            console.log('update space with letter', buttonData.value);
            dispatch(
                { 
                    type: 'UPDATE_SPACE',
                    payload: {
                        char: buttonData.value,
                        rowIndex: state.currRow,
                        spaceIndex: state.rowsState[state.currRow].currentSpaceIndex
                    }
                }
            );
        }
        if (buttonData.type === 'submit') {
            // Ensure guess is correct length, if so submit guess for evaluation 
            const currentGuess = state.rowsState[state.currRow].guess;

            if (currentGuess.length !== state.gameSolution.wordLength){
                dispatch({
                    type:'WORD_VALIDATION_ERROR',
                    payload: {
                        message: 'Not enough letters',
                    }
                });
            } else if (!isValidWord(currentGuess)) {
                console.log('Not in word list');
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
        if (buttonData.type === 'backspace') {
            dispatch(
                {
                    type: "BACKSPACE",
                    payload: { 
                        rowIndex: state.currRow,
                        spaceIndex: state.rowsState[state.currRow].currentSpaceIndex
                    }
                }
            )
        }
    }

    return <div className={`blurdle-letter evaluated-state_${evaluatedState} letter-size_${buttonData.size}`}>
        <button onClick={()=>{letterOnClickHandler(buttonData)}}>{value}</button>
    </div>;
}

export default Key;