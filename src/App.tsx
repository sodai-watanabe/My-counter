import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          My counter!!!
        </a>
        <Counter />
      </header>
    </div>
  );
}

export default App;
