import './styles.css';

export interface ILetterProps {
    onClickHandler?: (e:React.FormEvent<HTMLInputElement>) => void;
    evaluatedState?: string;
    letter: string;
}

export default ({letter = '', onClickHandler = () => {}, evaluatedState = "unevaluated"}) => {
    return <div className={`blurdle-letter evaluated-state_${evaluatedState}`}>
        <button onClick={onClickHandler}>{letter}</button>
    </div>;
}