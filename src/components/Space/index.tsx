import React, {useState} from 'react';
import { SpaceCharEvaluatedState } from '../../types-brainstorm';
import './styles.scss';

export interface ISpaceProps {
    charFromState?: string;
    children?: React.ReactNode;
    onChangeHandler?: (e:React.FormEvent<HTMLInputElement>) => void;
    fillState?: string;
    evaluatedState: SpaceCharEvaluatedState,
    spaceIndex: number;
}

const Space = ({
    charFromState = '',
    onChangeHandler = (e)=>{console.log(e.currentTarget.value)},
    fillState = 'empty',
    evaluatedState,
    spaceIndex,
}: ISpaceProps ) => {
    
    const [char,setChar] = useState(charFromState);

    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setChar(e.currentTarget.value)
    }

    return (
        <input 
            className={`blurdle-space evaluated-state_${evaluatedState}`}
            type="text" 
            maxLength={1} 
            onChange={onChange} 
            placeholder='' 
            value={char}
        />
    )
}

export default Space;