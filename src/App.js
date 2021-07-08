import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "CoE", "Computer", "Engineering", "PSU"];
function App() {
  return (
    <WordCard value={word[Math.floor(Math.random() * word.length)]}/>
  );
}

export default App;
