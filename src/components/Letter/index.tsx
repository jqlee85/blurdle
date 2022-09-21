import './styles.css';

export interface KeyboardButtonData {
    type: 'letter' | 'submit' | 'backspace';
    value: string;
}

export interface ILetterProps {
    onClickHandler?: (value:string) => void;
    evaluatedState?: string;
    buttonData: KeyboardButtonData;
}

export default ({buttonData, onClickHandler = (value:string) => {console.log(value)}, evaluatedState = "unevaluated"}:ILetterProps) => {
    return <div className={`blurdle-letter evaluated-state_${evaluatedState}`}>
        <button onClick={()=>{onClickHandler(buttonData.value)}}>{buttonData.value}</button>
    </div>;
}