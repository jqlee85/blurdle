import React, {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import './styles.scss';
import BoardContainer from '../BoardContainer';
import LettersContainer from '../LettersContainer';

export default ({}) => {
    
    const gameState = useContext(GameContext);
    
    return (
        <div className="blurdle-game-container">
            <BoardContainer gameState={gameState}/>
            <LettersContainer gameState={gameState}/>
        </div>);
}