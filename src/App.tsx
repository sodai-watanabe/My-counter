import React from 'react';
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
        >
          My counter!!!
        </a>
        <Counter />
      </header>
    </div>
  );
}

export default App;
