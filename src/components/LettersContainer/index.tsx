import './styles.scss';
import {useState} from 'react';
import Letter from '../Letter';
import { CHAR_EVALUATED_STATE, KeyboardCharEvaluatedState, KeyboardButtonData, KeyboardRow } from '../../types';

// TODO build this dynamically from the charset associated with the game (to allow for i18n)
// And serve from server
const keyboard: KeyboardRow[] = [
    [{type:'letter', size: 'sm', value:'Q'},{type:'letter', size: 'sm', value:'W'},{type:'letter', size: 'sm', value:'E'},{type:'letter', size: 'sm', value:'R'},{type:'letter', size: 'sm', value:'T'},{type:'letter', size: 'sm', value:'Y'},{type:'letter', size: 'sm', value:'U'},{type:'letter', size: 'sm', value:'I'},{type:'letter', size: 'sm', value:'O'},{type:'letter', size: 'sm', value:'P'}],
    [{type:'letter', size: 'sm', value:'A'},{type:'letter', size: 'sm', value:'S'},{type:'letter', size: 'sm', value:'D'},{type:'letter', size: 'sm', value:'F'},{type:'letter', size: 'sm', value:'G'},{type:'letter', size: 'sm', value:'H'},{type:'letter', size: 'sm', value:'J'},{type:'letter', size: 'sm', value:'K'},{type:'letter', size: 'sm', value:'L'},],
    [{type:'letter', size: 'sm', value:'Z'},{type:'letter', size: 'sm', value:'X'},{type:'letter', size: 'sm', value:'C'},{type:'letter', size: 'sm', value:'V'},{type:'letter', size: 'sm', value:'B'},{type:'letter', size: 'sm', value:'N'},{type:'letter', size: 'sm', value:'M'}],
    [{type:'submit', size: 'lg', value:'Enter'},{type:'backspace',  size: 'lg', value:'Delete'}]
];

export interface ILettersContainerProps {
    gameState: any;
}

const LettersContainer = ({
    gameState
}:ILettersContainerProps) => {
    
    const [value, setValue] = useState('');

    // Handle clicks on letter buttons and update the "form"
    const letterOnClickHandler = (buttonData: KeyboardButtonData) => {
        console.log('onclick',value)
        if (buttonData.type === 'letter') {
            setValue(buttonData.value);
            console.log('update space with letter', buttonData.value);
        }
        if (buttonData.type === 'submit') {
            console.log('submit row')
        }
        if (buttonData.type === 'backspace') {
            console.log('backspace');
        }
    }

    // Communicate with higher-level state
    const updateState = (value:string) => {
        console.log('update state',value)
    };
    
    return (<form 
        id="blurdle-keyboard"
        onSubmit={(event)=>{updateState(value);event.preventDefault()} }
    >
        <input
            hidden={true}
            value={value}
        />
        {keyboard.map((keyboardRow,j)=>{
            return (<div className="blurdle-keyboard-row">
                { keyboardRow.map((buttonData,i)=>{
                    let evaluatedState: KeyboardCharEvaluatedState = CHAR_EVALUATED_STATE.UNEVALUATED;
                    if (i===1) {evaluatedState = CHAR_EVALUATED_STATE.CORRECT}
                    if (i===2) {evaluatedState = CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK}
                    if (i===3) {evaluatedState = CHAR_EVALUATED_STATE.INCORRECT}
                    return <Letter
                        buttonData={buttonData}
                        key={`letter-${i}`}
                        evaluatedState={evaluatedState}
                        onClickHandler={letterOnClickHandler}
                    />
            })}
            </div>);
        })}
    </form>);
}

export default LettersContainer;