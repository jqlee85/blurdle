import {useContext,useEffect,useState} from 'react';
import './styles.scss';
import BoardContainer from '../BoardContainer';
import Keyboard from '../Keyboard';
import {GameContext} from '../../context/GameContext';
import { GAME_STATUS } from '../../constants';
import GameOverModal from '../GameOverModal';

const GameContainer = () => {
    
    const {state: {currRow, gameStatus, gameSolution, validationErrorMessage}, dispatch} = useContext(GameContext);

    const [displayedValidationErrorMessage, setDisplayedValidationErrorMessage] = useState('');
    
    useEffect(()=>{
        let timer: ReturnType<typeof setTimeout>;

        if (validationErrorMessage !== ''){
            console.log('hey')
            setDisplayedValidationErrorMessage(validationErrorMessage);
            timer = setTimeout(()=>{
                dispatch({
                    type:'WORD_VALIDATION_ERROR',
                    payload: {
                        message: '',
                    }
                });
            },2000);
        }

        return ()=>clearTimeout(timer);
    },[validationErrorMessage])

    return (
        <div className="blurdle-game-container">
            <div className="blurdle-validation-error-message">
                <p>{validationErrorMessage}</p>
            </div>
            <BoardContainer/>
            <Keyboard/>
            {(gameStatus === GAME_STATUS.WON || gameStatus === GAME_STATUS.LOST) &&
                <GameOverModal
                    gameStatus={gameStatus}
                    gameSolution={gameSolution}
                    numGuesses={currRow+1}
                />
            }
        </div>
    );
}

export default GameContainer;