import { SpaceState } from '../../types';
import './styles.scss';


export interface ISpaceProps {
    spaceState: SpaceState;
    rowIndex: number;
}

const Space = ({
    spaceState,
    rowIndex, 
}: ISpaceProps ) => {

    const {spaceChar, charEvaluatedState, spaceIndex} = spaceState;
    
    return (
        <input 
            className={`blurdle-space evaluated-state_${charEvaluatedState}`}
            type="text" 
            maxLength={1}
            placeholder='' 
            value={spaceChar}
            readOnly={true}
            autoFocus={!!(rowIndex === 0 && spaceIndex === 0)}
        />
    )
}

export default Space;