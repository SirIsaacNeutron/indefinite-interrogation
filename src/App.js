import React, { useState } from 'react';

import MainMenu from './components/MainMenu';
import Game from './components/Game';

import backgroundMusicFile from "./sounds/music.mp3";

import './App.css';

function App() {
  let [gameStarted, setGameStarted] = useState(false);
  let [isGameOver, setGameOver] = useState(false);
  
  return (
    <>
      { gameStarted ? 
      <Game setGameStarted={setGameStarted} isGameOver={isGameOver} 
      setGameOver={setGameOver} /> :
      <MainMenu setGameStarted={setGameStarted}/>}
      
      <audio className="bg-music" src={backgroundMusicFile} controls autoPlay loop></audio>
    </>
    );
  }
  
  export default App;
  