import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './StationList.css'

class StationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    let url = 'https://api.wmata.com/Rail.svc/json/jStations?api_key=e13626d03d8e4c03ac07f95541b3091b'
    axios.get(url)
      .then(res => {
        this.setState({ data: res.data.Stations })
      })
  }  
  render() {
    let color = this.props.match.params.color
    let line = this.props.match.params.line
    let stations = []
    
    this.state.data.map(station => {
      if (station.LineCode1 === line || station.LineCode2 === line || station.LineCode3 === line) {
        stations.push(station)
      }
    })
    stations.sort(function(a, b) {
      if (a.Name < b.Name)
        return -1
    })
    let stationList = stations.map(station => {
      return(
        <Link className='station' key={station.Code}>{station.Name}</Link>
      )
    })
    return(
      <div className='station-container'>
        <h1>{color} Line</h1>
        <ul className='station-list'>{stationList}</ul>
      </div>
    )
  }
}

export default StationList