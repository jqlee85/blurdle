import './styles.css';
import Space from '../Space';

const spaces = [0,0,0,0,0]; // Temp spaces for stylings

export default () => {
    return <div className="blurdle-row">
        { spaces.map((space,i)=><Space key={`space-${i}`} spaceIndex={i}/>) }    
    </div>;
}