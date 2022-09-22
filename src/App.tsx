import React, {useState, useEffect} from 'react';
import './App.scss';
import GameContextProvider from './context/GameContext';
import GameContainer from './components/GameContainer';
import {getGameData} from './utils/game-data';
import {IGameDataResponse, GameData} from './types';

function App() {
  
  const [gameDataResponse, setGameDataResponse] = useState<IGameDataResponse | null>(null);

  // On mount, fetch the data for the game
  useEffect(()=>{
    setGameDataResponse(getGameData());
  },[]);

  const gameData = ( gameDataResponse && gameDataResponse.data?.gameData ) 
    ? gameDataResponse.data.gameData
    : null;

  return (
    <div className="App">
      <header className="header">
        <h1>Blurdle</h1>
      </header>
      {gameData !== null && (
        <GameContextProvider gameData={gameData}>
          <main id="blurdle-game">
            <GameContainer/>
          </main>
        </GameContextProvider> 
      )}
        
    </div>
  );
}

export default App;
