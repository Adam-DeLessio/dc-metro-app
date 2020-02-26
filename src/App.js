import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Home from './components/Home'
import StationList from './components/StationList'
import SelectStation from './components/SelectStation'

class App extends Component {
  render() {
    return(
      <div className='app-container'>
        <Route
          path='/'
          exact
          render={props => (
            <Home
              {...props}
            />
          )}
        />
        <Route
          path='/StationList/:line/:color/'
          render={props => (
            <StationList
              {...props}
            />
          )}
        />  



      </div>
    )
  }
}

export default App