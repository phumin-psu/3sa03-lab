import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "CoE", "Computer", "Engineering", "PSU"];
function App() {
  return (
    <div>
      <h1>Word Suffle Game</h1>
      <WordCard value={word[Math.floor(Math.random() * word.length)]}/>
      <h3>Choose character orderd to win this game.</h3>
    </div>
  );
}

export default App;
