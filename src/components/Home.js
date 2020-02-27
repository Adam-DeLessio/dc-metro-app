import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
  render() {
    return(
      <div className='home-container'>
        <div className='colors'>
          <Link to='/StationList/RD/Red' className='line red'></Link>
          <Link to='/StationList/GR/Green' className='line green'></Link>
          <Link to='/StationList/YL/Yellow' className='line yellow'></Link>
          <Link to='/StationList/BL/Blue' className='line blue'></Link>
          <Link to='/StationList/SV/Silver' className='line silver'></Link>
          <Link to='/StationList/OR/Orange' className='line orange'></Link>
        </div>
      </div>
    )
  }
}

export default Home