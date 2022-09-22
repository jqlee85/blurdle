import './styles.scss';
import Space from '../Space';
import { KeyboardCharEvaluatedState, CHAR_EVALUATED_STATE, RowState } from '../../types';

const spaces = [0,0,0,0,0]; // Temp spaces for stylings

export interface IRowProps {
    rowState: RowState;
    isActiveRow: boolean;
}

const Row = ({
    rowState,
    isActiveRow=false,
}:IRowProps) => {
    
    const {spacesStates} = rowState;

    return <div 
        className={`blurdle-row 'blurdle-row_${isActiveRow ? 'ACTIVE' : 'INACTIVE'}`}
    >
        { spacesStates.map((spaceState,i)=>{
            return <Space
                key={`space-${i}`}
                spaceState={rowState.spacesStates[i]}
                disabled={!isActiveRow}
            />
        })}    
    </div>;
}

export default Row;