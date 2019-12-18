import React from 'react';
import logo from './logo.svg';
import './App.css';

//import icon files:
import Accounts from "./components/Accounts.js";
import City from "./components/City.js";
import HomeIcon from "./components/HomeIcon.js"
import TicTacToe from "./components/TicTacToe.js";



function App() {
  return (
    <div className="App">
      <div className="App-icons">
        <HomeIcon />
        <TicTacToe />
        <City />
        <Accounts />
      </div>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={home} className="App-home" alt="home" /> */}
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
}

export default App;
