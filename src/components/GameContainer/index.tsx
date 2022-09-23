import './styles.scss';
import BoardContainer from '../BoardContainer';
import Keyboard from '../Keyboard';
import {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import { GAME_STATUS } from '../../types';
import GameOverModal from '../GameOverModal';

const GameContainer = ({}) => {
    
    const {state: {currRow, gameStatus, gameSolution}} = useContext(GameContext);

    return (
        <div className="blurdle-game-container">
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