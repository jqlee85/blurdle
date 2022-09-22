import './styles.scss';
import {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import Row from '../Row';
import {RowState} from '../../types';

export interface IBoardContainerProps {
}

export default ({
}:IBoardContainerProps) => {
    
    const {state: {currRow, rowsState, gameSolution: {wordLength}}, dispatch} = useContext(GameContext);

    return (
        <div className="blurdle-board-container">
            {rowsState.map((rowState:RowState,i:number)=>{
                return <Row 
                    key={`row-${i}`}
                    rowState={rowState}
                    isActiveRow={rowState.rowIndex === currRow}
                />})}
        </div>
    );
}