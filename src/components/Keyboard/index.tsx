import './styles.scss';
import Letter from '../Key';
import { KeyboardRow } from '../../types';

// TODO build this dynamically from the charset associated with the game (to allow for i18n)
// And serve from server
const keyboard: KeyboardRow[] = [
    [{type:'letter', size: 'sm', value:'Q'},{type:'letter', size: 'sm', value:'W'},{type:'letter', size: 'sm', value:'E'},{type:'letter', size: 'sm', value:'R'},{type:'letter', size: 'sm', value:'T'},{type:'letter', size: 'sm', value:'Y'},{type:'letter', size: 'sm', value:'U'},{type:'letter', size: 'sm', value:'I'},{type:'letter', size: 'sm', value:'O'},{type:'letter', size: 'sm', value:'P'}],
    [{type:'letter', size: 'sm', value:'A'},{type:'letter', size: 'sm', value:'S'},{type:'letter', size: 'sm', value:'D'},{type:'letter', size: 'sm', value:'F'},{type:'letter', size: 'sm', value:'G'},{type:'letter', size: 'sm', value:'H'},{type:'letter', size: 'sm', value:'J'},{type:'letter', size: 'sm', value:'K'},{type:'letter', size: 'sm', value:'L'},],
    [{type:'submit', size: 'lg', value:'Enter'},{type:'letter', size: 'sm', value:'Z'},{type:'letter', size: 'sm', value:'X'},{type:'letter', size: 'sm', value:'C'},{type:'letter', size: 'sm', value:'V'},{type:'letter', size: 'sm', value:'B'},{type:'letter', size: 'sm', value:'N'},{type:'letter', size: 'sm', value:'M'},{type:'backspace',  size: 'lg', value:'Del'}]
];

export interface IKeyboardProps {
}

const Keyboard = ({
}:IKeyboardProps) => {
    return (<div 
        id="blurdle-keyboard"
    >
        {keyboard.map((keyboardRow,j)=>{
            return (<div className={`blurdle-keyboard-row blurdle-keyboard-row_${j}`} key={`keyboard-row_${j}`}>
                { keyboardRow.map((buttonData,i)=>{
                    return <Letter
                        buttonData={buttonData}
                        key={`letter-${i}`}
                    />
            })}
            </div>);
        })}
    </div>);
}

export default Keyboard;