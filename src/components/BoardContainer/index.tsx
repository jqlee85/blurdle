import './styles.scss';
import {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import Row from '../Row';
import {RowState} from '../../types';

export interface IBoardContainerProps {
    onRowSubmitHandler: (rowIndex: number, guess: string)=>void;
}

export default ({
    onRowSubmitHandler,
}:IBoardContainerProps) => {
    
    const {state: {currRow, rowsState, gameSolution: {wordLength}}, dispatch} = useContext(GameContext);

    return (
        <div className="blurdle-board-container">
            {rowsState.map((rowState:RowState,i:number)=>{
                return <Row 
                    key={`row-${i}`}
                    rowState={rowState}
                    onRowSubmitHandler={onRowSubmitHandler}
                    isActiveRow={rowState.rowIndex === currRow}
                />})}
        </div>
    );
}