import React, { Component } from 'react'
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
    let url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/all?api_key=e13626d03d8e4c03ac07f95541b3091b'
    axios.get(url)
      .then(res => {
        this.setState({ data: res.data.Trains })
      })
  }  
  render() {
    let color = this.props.match.params.color
    let line = this.props.match.params.line
    let trains = []
    
    this.state.data.map(train => {
      if (train.Line === line) {
        trains.push(train)
      }
    })
    let trainsList = trains.map(train => {
      return(
        <li>{train.LocationName}</li>
      )
    })
    console.log(this.props.match.params.line)
    console.log(trains)
    return(
      <div className='station-container'>
        <h1>{color} Line</h1>
        <ul>{trainsList}</ul>
      </div>
    )
  }
}

export default StationList