import React from 'react';

import MainMenu from './components/MainMenu.js';

import backgroundMusicFile from "./sounds/music.mp3";

import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="game-header">Indefinite</h1>
        <p className="menu-question">Ready to begin the interrogation?</p>

        <audio className="bg-music" src={backgroundMusicFile} controls autoPlay loop></audio>

        <MainMenu />
      </>);
  }
}

export default App;
