import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Home from './components/Home'

class App extends Component {
  render() {
    return(
      <div>
        <Home />
      </div>
    )
  }
}

export default App