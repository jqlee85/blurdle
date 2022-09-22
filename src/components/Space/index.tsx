import React, {useState} from 'react';
import { SpaceCharEvaluatedState, SpaceState } from '../../types';
import './styles.scss';

export interface ISpaceProps {
    spaceState: SpaceState;
    disabled: boolean;
}

const Space = ({
    spaceState, 
    disabled=true,
}: ISpaceProps ) => {

    const {spaceChar, charEvaluatedState, spaceIndex} = spaceState;

    return (
        <input 
            className={`blurdle-space evaluated-state_${charEvaluatedState}`}
            type="text" 
            maxLength={1}
            placeholder='' 
            value={spaceChar}
            disabled={true}
        />
    )
}

export default Space;