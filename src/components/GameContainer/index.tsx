import './styles.css';
import Row from '../Row';

const rows = [0,0,0,0,0,0]; // Temp rows for styling

export default () => {
    
    return (
        <div className="blurdle-game-container">
            {rows.map((rowData,i)=><Row key={`row-${i}`}/>)}
        </div>
    );
}