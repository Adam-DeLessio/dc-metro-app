import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []

    }
  }
  componentDidMount() {
    let url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/all?api_key=e13626d03d8e4c03ac07f95541b3091b'
    let apiKey = 'e13626d03d8e4c03ac07f95541b3091b'
    let data = axios.get(url)
      .then(res => {
        this.setState({ data: res.data.Trains })
      })
  }
  render() {
    let train = this.state.data.map(dest => {
      return(
        <li>{dest.Destination}</li>
      )
    })
    console.log(this.state.data[0])
    return(
      <div className='app-container'>
        <div className='colors'>
          <div className='line red'></div>
          <div className='line green'></div>
          <div className='line yellow'></div>
          <div className='line blue'></div>
          <div className='line silver'></div>
          <div className='line orange'></div>
        </div>
      </div>
    )
  }
}

export default Home