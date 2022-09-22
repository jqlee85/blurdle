import './styles.scss';
import {CHAR_EVALUATED_STATE,KeyboardButtonData, KeyboardCharEvaluatedState} from '../../types';

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