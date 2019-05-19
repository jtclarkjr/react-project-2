import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import "isomorphic-fetch"

const API_KEY = 'ca9302a9f734543d577a146054788064';
class ChartJPY extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartJPY: {}
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
			jsonData: json,
			chartJPY: {
				labels: [json.date],
				datasets:[
					{
						data:[ json.rates.JPY],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
						],
						borderWidth: 3,
					},
				]
			},
		})
	});
}

	static defaultProps = {
		displayTitle: true,
		textTitle: 'JPY Lastest Rate (EUR = 1)',
		displayLegend: false,
		legendPosition: 'bottom',
	}

	render() {
		return ( 
		<div className = "ChartJPY">
			<Bar 
				data = {this.state.chartJPY}
				options = {{
					title: {
						display: this.props.displayTitle,
						text: this.props.textTitle,
						fontSize: 25
					},
					legend: {
						display: this.props.displayLegend,
						position: this.props.legendPosition
					},
					scales: {
						xAxes: [{
							barPercentage: 0.4
						}]
					}
				}}
			/> 
		</div>
		);
	}
}

export default ChartJPY;