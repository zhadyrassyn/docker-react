import React, { Component } from 'react';
import logo from './dockerDeploy.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
            Доброе утро, Амин =)
          </p>
        </header>
      </div>
    );
  }
}

export default App;
