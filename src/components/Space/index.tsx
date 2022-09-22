import React, {useState} from 'react';
import { SpaceCharEvaluatedState, SpaceState } from '../../types';
import './styles.scss';

export interface ISpaceProps {
    spaceState: SpaceState;
    onChangeHandler: (e:React.FormEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

const Space = ({
    spaceState, 
    disabled=true,
    onChangeHandler,
}: ISpaceProps ) => {

    const {spaceChar, charEvaluatedState, spaceIndex} = spaceState;

    const onChange = (e:Event) => {
        // console.log(e.currentTarget.value);
        // dispatch({type:'UPDATE_SPACE_CHAR',payload: {char:e.currentTarget.value, rowIndex:rowIndex,spaceIndex:spaceIndex}})
    }

    return (
        <input 
            className={`blurdle-space evaluated-state_${charEvaluatedState}`}
            type="text" 
            maxLength={1} 
            onChange={onChangeHandler} 
            placeholder='' 
            value={spaceChar}
            disabled={disabled}
        />
    )
}

export default Space;