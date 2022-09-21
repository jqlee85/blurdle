import './styles.css';
import Letter from '../Letter';

const keyboard = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L',],
    ['Z','X','C','V','B','N','M',],
];

export default () => {
    return (<form id="blurdle-keyboard">
        {keyboard.map((keyboardRow,i)=>{
            return (<div className="blurdle-keyboard-row">
                { keyboardRow.map((letter,i)=><Letter letter={letter} key={`letter-${i}`}/> )}
            </div>);
        })}
    </form>);
}