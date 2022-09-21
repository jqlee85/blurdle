import './styles.css';
import Letter, {KeyboardButtonData} from '../Letter';

export type KeyboardRow = KeyboardButtonData[];

const keyboard: KeyboardRow[] = [
    [{type:'letter',value:'Q'},{type:'letter',value:'W'},{type:'letter',value:'E'},{type:'letter',value:'R'},{type:'letter',value:'T'},{type:'letter',value:'Y'},{type:'letter',value:'U'},{type:'letter',value:'I'},{type:'letter',value:'O'},{type:'letter',value:'P'}],
    [{type:'letter',value:'A'},{type:'letter',value:'S'},{type:'letter',value:'D'},{type:'letter',value:'F'},{type:'letter',value:'G'},{type:'letter',value:'H'},{type:'letter',value:'J'},{type:'letter',value:'K'},{type:'letter',value:'L'},],
    [{type:'submit',value:'Enter'} ,{type:'letter',value:'Z'},{type:'letter',value:'X'},{type:'letter',value:'C'},{type:'letter',value:'V'},{type:'letter',value:'B'},{type:'letter',value:'N'},{type:'letter',value:'M'},{type:'backspace', value:'del'}],
];

export default () => {
    return (<form id="blurdle-keyboard">
        {keyboard.map((keyboardRow,i)=>{
            return (<div className="blurdle-keyboard-row">
                { keyboardRow.map((buttonData,i)=><Letter buttonData={buttonData} key={`letter-${i}`}/> )}
            </div>);
        })}
    </form>);
}