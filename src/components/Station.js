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
		let url1 = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + stationCode + '?api_key=e13626d03d8e4c03ac07f95541b3091b'

		if (this.props.match.params.StationTogether1) {
			let stationTogether = this.props.match.params.StationTogether1
			let url2 = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + stationTogether + '?api_key=e13626d03d8e4c03ac07f95541b3091b'
			
			let req1 = axios.get(url1)
			let req2 = axios.get(url2)
			axios.all([req1, req2])
				.then(axios.spread((...res) => {
					this.setState({ data: res[0].data.Trains })
					res[1].data.Trains.map(train => {
						this.setState({ data: [...this.state.data, train] })	
					})
				}))
		} else {
			axios.get(url1)
				.then(res => {
					this.setState({ data: res.data.Trains })
				})
		}
	}
	render() {
		this.state.data.sort(function(a, b) {
			if (a.DestinationCode < b.DestinationCode)
				return -1
		})
		let trains = this.state.data.map(train => {
			return(
				<li className={`${train.Line} train`} key={train.DestinationCode + train.Min}>{train.DestinationName} {train.Min}</li>
			)
		})
		return(
			<div className='station-container'>
				<h1>{this.props.match.params.StationName}</h1>
				<ul className='trains'>{trains}</ul>
			</div>
		)
	}
}

export default Station