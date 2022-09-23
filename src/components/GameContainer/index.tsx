import './styles.scss';
import BoardContainer from '../BoardContainer';
import LettersContainer from '../LettersContainer';
import {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import { GAME_STATUS } from '../../types';
import GameOverModal from '../GameOverModal';
import { stat } from 'fs';

export default ({}) => {
    
    const {state: {currRow, gameStatus, gameSolution}} = useContext(GameContext);
    console.log({gameStatus})

    return (
        <div className="blurdle-game-container">
            <BoardContainer/>
            <LettersContainer/>
            {(gameStatus === GAME_STATUS.WON || gameStatus === GAME_STATUS.LOST) &&
                <GameOverModal
                    gameStatus={gameStatus}
                    gameSolution={gameSolution}
                    numGuesses={currRow+1}
                />
            }
        </div>);
}