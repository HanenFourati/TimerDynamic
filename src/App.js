import React, { Component } from 'react';
import TimerDyn from'./TimerDyn.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TimerDyn time="18139999"/> 
      </div>
    );
  }
}

export default App;
