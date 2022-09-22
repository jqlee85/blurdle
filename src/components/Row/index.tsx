import './styles.scss';
import Space from '../Space';
import { KeyboardCharEvaluatedState, CHAR_EVALUATED_STATE, RowState } from '../../types';

const spaces = [0,0,0,0,0]; // Temp spaces for stylings

export interface IRowProps {
    rowState: RowState;
    onRowSubmitHandler: (rowIndex: number, guess:string) => void;
    isActiveRow: boolean;
}

const Row = ({
    rowState,
    onRowSubmitHandler,
    isActiveRow=false,
}:IRowProps) => {
    
    const {spacesStates} = rowState;
    
    return <div 
        className={`blurdle-row 'blurdle-row_${isActiveRow ? 'ACTIVE' : 'INACTIVE'}`}
        onClick={()=>{onRowSubmitHandler(rowState.rowIndex, rowState.guess)}}
    >
        { spacesStates.map((spaceState,i)=>{
            let evaluatedState: KeyboardCharEvaluatedState = CHAR_EVALUATED_STATE.UNEVALUATED;
            if (i===1) {evaluatedState = CHAR_EVALUATED_STATE.CORRECT}
            if (i===2) {evaluatedState = CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK}
            if (i===3) {evaluatedState = CHAR_EVALUATED_STATE.INCORRECT}
            return <Space
                key={`space-${i}`}
                spaceIndex={i}
                evaluatedState={evaluatedState}
                disabled={!isActiveRow}
            />
        })}    
    </div>;
}

export default Row;