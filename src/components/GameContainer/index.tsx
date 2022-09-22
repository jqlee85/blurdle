import React, {useContext} from 'react';
import {GameContext} from '../../context/GameContext';
import './styles.scss';
import BoardContainer from '../BoardContainer';
import LettersContainer from '../LettersContainer';

export default ({}) => {
    
    const gameState = useContext(GameContext);
    console.log('gameState',gameState)
    
    return (
        <div className="blurdle-game-container">
            <BoardContainer/>
            <LettersContainer gameState={gameState}/>
        </div>);
}