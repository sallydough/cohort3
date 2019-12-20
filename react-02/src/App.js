import React from 'react';
// import logo from './logo.svg';
import './App.css';

import tictactoe from "./components/svgAppImages/tic.svg"
import home from "./components/svgAppImages/home.svg"

//import icon files:
import Accounts from "./components/Accounts.js";
import City from "./components/City.js";
import HomeIcon from "./components/HomeIcon.js"
import TicTacToe from "./components/TicTacToe.js";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: null
    }
    this.style = {backgroundColor: '#d4bea7'};
    this.icons = [Accounts, City, HomeIcon, TicTacToe];
  }

  onSelect = (event) => {
    this.setState({
      selected: event.target.name
    });

  }
render() {
  return (
    <div className="App">
      <div className="App-nav">
      <img src={home} onClick={(e) => {this.setState({selected : <HomeIcon />})}}      className="App-home" alt="home" />
        <img src={tictactoe} onClick={(e) => {this.setState({selected : <TicTacToe />})}} className="App-tictactoe" alt="tictactoe" />
        <Accounts />
        <City />
      </div>

      {this.state.selected}
    </div>
  );
}
}


export default App;
