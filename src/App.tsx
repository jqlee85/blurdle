import React, {useState, useEffect} from 'react';
import './App.scss';
import GameContextProvider from './context/GameContext';
import GameContainer from './components/GameContainer';
import {getGameData} from './utils/game-data';
import {IGameDataResponse, GameData} from './types';
import {getCurrentDate, getDateParam, isValidDateFormat} from './utils/date-utils';

function App() {
  
  const [gameDataResponse, setGameDataResponse] = useState<IGameDataResponse | null>(null);

  // On mount, fetch the data for the game
  useEffect(()=>{
    const dateFromParam = getDateParam();
    const date = (dateFromParam && isValidDateFormat(dateFromParam))
      ? dateFromParam
      : getCurrentDate();

    console.log('date',date)
    setGameDataResponse(getGameData(date));
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
      <footer></footer>
    </div>
  );
}

export default App;
