import './styles.scss';
import {CHAR_EVALUATED_STATE,KeyboardButtonData, KeyboardCharEvaluatedState} from '../../types';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export interface ILetterProps {
    buttonData: KeyboardButtonData;
}

export default ({
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
            console.log('submit row')
            // Ensure guess is correct length, if so submit guess for evaluation
            if (state.rowsState[state.currRow].guess.length === state.gameSolution.wordLength){
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