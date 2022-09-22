import './styles.scss';
import Row from '../Row';

const rows = [0,0,0,0,0,0]; // Temp rows for styling

export interface IBoardContainerProps {
    gameState: any;
}

export default ({
    gameState
}:IBoardContainerProps) => {
    
    // const {rows} = gameState;
    
    return (
        <div className="blurdle-board-container">
            {rows.map((rowData,i)=><Row key={`row-${i}`}/>)}
        </div>
    );
}