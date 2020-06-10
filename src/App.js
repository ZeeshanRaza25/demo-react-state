import React from 'react';
import './App.css';
import Room from './components/Room'
import LightBulb from './components/LightBulb';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div>
        <Room />
        <LightBulb />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
