import React from 'react';
import logo from './logo.svg';
import './App.css';

//import MyComponent/OddComponent/EvenComp file to this App file:
import MyComponent from './components/MyComponent.js';
import EvenComponent from './components/EvenComponent.js';
import OddComponent from './components/OddComponent.js';




class App extends React.Component {
  constructor(props) {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }

  onPushMe = () => {
    console.log("You pushed me");
    console.log(this.counter++);
    this.setState({
      myState: "now:" + this.counter
    });
  }
    // function App() {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>I am in control of this application and my name is Sally {this.state.myState} </h1>
            {/* <button onClick={this.onPushMe}> 
            Push Me
          </button> */}
          <MyComponent WhatToSay={"Whatever"} pushChange={this.onPushMe}
          />
          <EvenComponent counter={this.counter}/>
          <OddComponent counter={this.counter}/>
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
  }


  export default App;
