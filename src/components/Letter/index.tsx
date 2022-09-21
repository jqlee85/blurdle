import './styles.css';
import {CHAR_EVALUATED_STATE, KeyboardCharEvaluatedState} from '../../types-brainstorm';

export interface KeyboardButtonData {
    type: 'letter' | 'submit' | 'backspace';
    size: 'sm' | 'md';
    value: string;
}

export interface ILetterProps {
    onClickHandler?: (value:string) => void;
    evaluatedState?: KeyboardCharEvaluatedState;
    buttonData: KeyboardButtonData;
}

export default ({
    buttonData, onClickHandler = (value:string) => {console.log(value)},
    evaluatedState = CHAR_EVALUATED_STATE.UNEVALUATED
}:ILetterProps) => {
    return <div className={`blurdle-letter evaluated-state_${evaluatedState} letter-size_${buttonData.size}`}>
        <button onClick={()=>{onClickHandler(buttonData.value)}}>{buttonData.value}</button>
    </div>;
}