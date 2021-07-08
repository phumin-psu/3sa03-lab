import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <WordCard value={word}/>
  );
}

export default App;
