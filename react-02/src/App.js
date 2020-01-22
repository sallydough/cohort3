import React from 'react';
// import logo from './logo.svg';
import './App.css';

import tictactoe from "./components/svgAppImages/tic.svg"
import home from "./components/svgAppImages/home.svg"
import account from "./components/svgAppImages/bank.svg"
import city from "./components/svgAppImages/city.svg"
import linkedlist from "./components/svgAppImages/linkedlistt.svg"
import fifolifo from "./components/svgAppImages/fifolifo.svg"

//import icon files:
import Accounts from "./components/Accounts.js";
import City from "./components/City.js";
import HomeIcon from "./components/HomeIcon.js"
import TicTacToe from "./components/TicTacToe.js";
import LinkedList from "./components/LinkedList.js";
import FifoLifo from "./components/FifoLifo.js"

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
        <img src={account} onClick={(e) => {this.setState({selected : <Accounts />})}} className="App-accounts" alt="accounts" />
        <img src={city} onClick={(e) => {this.setState({selected : <City />})}} className="App-cities" alt="cities" />
        <img src={linkedlist} onClick={(e) => {this.setState({selected : <LinkedList />})}} className="App-linkedlist" alt="cities" />
        <img src={fifolifo} onClick={(e) => {this.setState({selected : <FifoLifo />})}} className="App-fifolifo" alt="cities" />
      </div>

      {this.state.selected}
    </div>
  );
}
}


export default App;
