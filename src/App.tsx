import './App.css';
import GameContainer from './components/GameContainer';
import LettersContainer from './components/LettersContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blurdle</h1>
      </header>

      <main id="blurdle-game">
        <GameContainer/>
      </main>

      <aside id="blurdle-keyboard">
        <LettersContainer/>
      </aside>
    </div>
  );
}

export default App;
