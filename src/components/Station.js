import React, { Component } from 'react'
import axios from 'axios'
import './Station.css'

class Station extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		let stationCode = this.props.match.params.StationCode
		let url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + stationCode + '?api_key=e13626d03d8e4c03ac07f95541b3091b'
		axios.get(url)
			.then(res => {
				this.setState({ data: res.data.Trains })
			})
	}
	render() {
		this.state.data.sort(function(a, b) {
			if (a.DestinationCode < b.DestinationCode)
				return -1
		})
		let trains = this.state.data.map(train => {
			return(
				<li className={`line-color-${train.Line}`}>{train.DestinationName} {train.Min}</li>
			)
		})
		return(
			<div className='station-container'>
				<ul>{trains}</ul>
			</div>
		)
	}
}

export default Station