import './App.scss';
import GameContainer from './components/GameContainer';
import LettersContainer from './components/LettersContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Blurdle</h1>
      </header>

      <main id="blurdle-game">
        <GameContainer/>
      </main>

      
      <LettersContainer/>
    </div>
  );
}

export default App;
