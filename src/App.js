import React from 'react';
import BackgroundImage from './components/BackgroundImage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackgroundImage />
        <p>
          Welcome on Kaygu.be
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
