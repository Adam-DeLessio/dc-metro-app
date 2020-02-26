import React, { Component } from 'react'
import axios from 'axios'
import './SelectStation.css'


class SelectStation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []

    }
  }
  componentDidMount() {
    let url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/all?api_key=e13626d03d8e4c03ac07f95541b3091b'
    let apiKey = 'e13626d03d8e4c03ac07f95541b3091b'
    axios.get(url)
      .then(res => {
        this.setState({ data: res.data.Trains })
      })
  }
  render() {
    let train = this.state.data.map(train => {
      return(
        <li>{train.Destination}</li>
      )
    })
    console.log(this.state.data[0])
    return(
      <div className='station-container'>

      </div>
    )
  }
}

export default SelectStation