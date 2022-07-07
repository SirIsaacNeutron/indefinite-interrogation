import React, { useState } from 'react'

import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Report from './components/Report'

import backgroundMusicFile from "./sounds/music.mp3"

import './App.css'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [isGameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [showReport, setShowReport] = useState(false)
  
  return (
    <>
      {showReport && <Report score={score} setShowReport={setShowReport} 
      setAnsweredQuestions={setAnsweredQuestions} answeredQuestions={answeredQuestions} 
      setScore={setScore} />}
      { (gameStarted && !showReport) && 
      <Game setGameStarted={setGameStarted} isGameOver={isGameOver} 
      setGameOver={setGameOver} score={score} setScore={setScore} 
      setAnsweredQuestions={setAnsweredQuestions} 
      setShowReport={setShowReport} /> }
      { (!gameStarted && !showReport) && <MainMenu setGameStarted={setGameStarted}/> }
      
      <audio className="bg-music" src={backgroundMusicFile} controls autoPlay loop></audio>
    </>
    );
  }
  
  export default App;
  