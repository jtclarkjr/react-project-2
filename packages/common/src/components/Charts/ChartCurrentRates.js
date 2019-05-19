import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import "isomorphic-fetch"

const API_KEY = 'ca9302a9f734543d577a146054788064';
class ChartCurrentRates extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {},
		}
	}
	
	componentWillMount(){
		this.getChartData();
	}
	  
  getChartData(){
    fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`)
	.then(res => res.json())
	.then(json => {
		this.setState({
			chartData: {
				labels: ['China','Japan','Korea'],
				datasets:[
					{
						data:[ 
							json.rates.CNY, 
							json.rates.JPY, 
							json.rates.KRW ],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
						],
						borderWidth: 1
					}
				]
			},
		})
	});
  }

	static defaultProps = {
		displayTitle: true,
		textTitle: 'Rates (EUR = 1)',
		displayLegend: false,
		legendPosition: 'bottom',
	}

	render() {
		return ( 
		<div className = "ChartCurrentRates">
			<Bar 
				data = {this.state.chartData}
				options = {{
					title: {
						display: this.props.displayTitle,
						text: this.props.textTitle,
						fontSize: 25
					},
					legend: {
						display: this.props.displayLegend,
						position: this.props.legendPosition
					}
				}}
			/> 
		</div>
		);
	}
}

export default ChartCurrentRates;