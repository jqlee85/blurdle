import React, {useState} from 'react';
import './styles.css';

export interface ISpaceProps {
    charFromState?: string;
    children?: React.ReactNode;
    onChangeHandler?: (e:React.FormEvent<HTMLInputElement>) => void;
    fillState?: string;
    evaluatedState?: string;
    spaceIndex: number;
}

const Space = ({
    charFromState = '',
    onChangeHandler = (e)=>{console.log(e.currentTarget.value)},
    fillState = 'empty',
    evaluatedState = 'unevaluated',
    spaceIndex,
}: ISpaceProps ) => {
    
    const [char,setChar] = useState(charFromState);

    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setChar(e.currentTarget.value)
    }

    return (
        <input 
            className="blurdle-space"
            type="text" 
            maxLength={1} 
            onChange={onChange} 
            placeholder='' 
            value={char}
        />
    )
}

export default Space;