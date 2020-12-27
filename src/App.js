import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Game from './components/Snake';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello !</h1>
        <Clock />
      </header>*/}
    <Game />
    </div>
    );
  }
  
  export default App;
  