import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import StationList from './components/StationList'
// import SelectStation from './components/SelectStation'
import Station from './components/Station'

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
        <Route
          path='/station/:StationCode/:StationName/'
          exact
          render={props => (
            <Station
              {...props}
            />
          )}
        />
        <Route
          path='/station/:StationCode/StationName/:StationTogether1/'
          render={props => (
            <Station
              {...props}
            />
          )}
        />

      </div>
    )
  }
}

export default App