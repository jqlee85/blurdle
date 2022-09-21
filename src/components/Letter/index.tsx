import './styles.scss';
import {CHAR_EVALUATED_STATE, KeyboardCharEvaluatedState} from '../../types-brainstorm';

export interface KeyboardButtonData {
    type: 'letter' | 'submit' | 'backspace';
    size: 'sm' | 'md' | 'lg';
    value: string;
}

export interface ILetterProps {
    onClickHandler: (buttonData:KeyboardButtonData) => void;
    evaluatedState?: KeyboardCharEvaluatedState;
    buttonData: KeyboardButtonData;
}

export default ({
    buttonData,
    onClickHandler,
    evaluatedState = CHAR_EVALUATED_STATE.UNEVALUATED
}:ILetterProps) => {
    return <div className={`blurdle-letter evaluated-state_${evaluatedState} letter-size_${buttonData.size}`}>
        <button onClick={()=>{onClickHandler(buttonData)}}>{buttonData.value}</button>
    </div>;
}