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
    
    const onSpaceChangeHandler = (char:string,spaceIndex:number) => {
        //Update guess

        
        
    }

    return <div 
        className={`blurdle-row 'blurdle-row_${isActiveRow ? 'ACTIVE' : 'INACTIVE'}`}
    >
        { spacesStates.map((spaceState,i)=>{
            let evaluatedState: KeyboardCharEvaluatedState = CHAR_EVALUATED_STATE.UNEVALUATED;
            if (i===1) {evaluatedState = CHAR_EVALUATED_STATE.CORRECT}
            if (i===2) {evaluatedState = CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK}
            if (i===3) {evaluatedState = CHAR_EVALUATED_STATE.INCORRECT}
            return <Space
                key={`space-${i}`}
                spaceState={rowState.spacesStates[i]}
                disabled={!isActiveRow}
                onChangeHandler={onSpaceChangeHandler}
            />
        })}    
    </div>;
}

export default Row;