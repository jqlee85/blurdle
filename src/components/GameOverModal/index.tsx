import './styles.scss';
import { GameStatus, GAME_STATUS, GameSolution } from '../../types';

export interface IGameOverModalProps {
    gameStatus: GameStatus;
    gameSolution: GameSolution;
    numGuesses: number;
}

export default ({
    gameStatus,
    gameSolution,
    numGuesses,
}:IGameOverModalProps) => {

    return (
        <div
            className="blurdle-game-over-modal"
        >
            {gameStatus === GAME_STATUS.WON &&
                <div className="blurdle-modal-content won">
                    <h2>{`Congrats!`}</h2>
                    <p>{`You guessed in ${numGuesses} ${numGuesses > 1 ? `guesses`: `guess`}`}</p>
                    <p>{`Word was `}<span className="solution">{gameSolution.solution}</span></p>
                </div>
            }
            {gameStatus === GAME_STATUS.LOST &&
                <div className="blurdle-modal-content lost">
                    <h2>{`Bummer.`}</h2>
                    <p>{`Word was `}<span className="solution">{gameSolution.solution}</span></p>
                    <p>{`Better luck next time.`}</p>
                </div>
            }
        </div>
    );
}