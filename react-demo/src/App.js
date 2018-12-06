import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './route'

class App extends Component {
  render () {
    return (
      <div>
        hello everybody
        <AppRouter/>
      </div>
    )
  }
}

export default App