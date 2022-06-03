import React, { useState } from 'react';

import MainMenu from './components/MainMenu';

import backgroundMusicFile from "./sounds/music.mp3";

import './App.css';

function App() {
  let [gameStarted, setGameStarted] = useState(false);
  
  return (
    <>
      <MainMenu setGameStarted={setGameStarted}/>
      
      <audio className="bg-music" src={backgroundMusicFile} controls autoPlay loop></audio>
    </>
    );
  }
  
  export default App;
  