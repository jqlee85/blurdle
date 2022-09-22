import './styles.scss';
import Space from '../Space';
import { KeyboardCharEvaluatedState, CHAR_EVALUATED_STATE } from '../../types';

const spaces = [0,0,0,0,0]; // Temp spaces for stylings

export default () => {
    return <div className="blurdle-row">
        { spaces.map((space,i)=>{
            let evaluatedState: KeyboardCharEvaluatedState = CHAR_EVALUATED_STATE.UNEVALUATED;
            if (i===1) {evaluatedState = CHAR_EVALUATED_STATE.CORRECT}
            if (i===2) {evaluatedState = CHAR_EVALUATED_STATE.WRONG_SPOT_IN_STOCK}
            if (i===3) {evaluatedState = CHAR_EVALUATED_STATE.INCORRECT}
            return <Space
                key={`space-${i}`}
                spaceIndex={i}
                evaluatedState={evaluatedState}
            />
        })}    
    </div>;
}