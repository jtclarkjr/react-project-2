import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import "isomorphic-fetch"

//current date plus 4 days before
let dateOne = new Date().getDate(); //Current Date
let dateTwo = new Date().getDate() - 1;
let dateThree = new Date().getDate() - 2;
let dateFour = new Date().getDate() - 3;
let dateFive = new Date().getDate() - 4;

let month = new Date().getMonth() + 1; //Current Month
let year = new Date().getFullYear(); //Current Year

//dates formatted for endpoint param
const NOW = year + '-' + month + '-' + dateOne;
const DAY_2 = year + '-' + month + '-' + dateTwo;
const DAY_3 = year + '-' + month + '-' + dateThree;
const DAY_4 = year + '-' + month + '-' + dateFour;
const DAY_5 = year + '-' + month + '-' + dateFive;

//api key from http://fixer.io
const API_KEY = 'ca9302a9f734543d577a146054788064';
const ENDPOINT = 'latest';

class ChartJPYLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
      chartDataLinear: {}
		}
	}
	
	componentWillMount(){
		this.getChartData();
	}
	  
	getChartData(){
		// API Calls have a limit of 1000 (based on the subscription free plan from fixer.io)
		Promise.all([
			fetch(`http://data.fixer.io/api/${ENDPOINT}?access_key=${API_KEY}`),
			fetch(`https://api.exchangeratesapi.io/${DAY_2}`),
			fetch(`https://api.exchangeratesapi.io/${DAY_3}`),
			fetch(`https://api.exchangeratesapi.io/${DAY_4}`),
			fetch(`https://api.exchangeratesapi.io/${DAY_5}`),
		])
		.then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json()]))
		.then(([data1, data2, data3, data4, data5]) => this.setState({
			//Chart data controllers
			chartDataLinear: {
			labels: [DAY_5, DAY_4, DAY_3, DAY_2, NOW,],
			datasets:[ 
				{
				data: [
					data5.rates.JPY, 
					data4.rates.JPY, 
					data3.rates.JPY, 
					data2.rates.JPY, 
					data1.rates.JPY,
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.0)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
				],
				borderWidth: 3
			},
				
			]}
		}));        
	}

	static defaultProps = {
		displayTitle: true,
		textTitle: 'Past 5 days for JPY rates (EUR = 1)',
		displayLegend: false,
		legendPosition: 'bottom',
	}

	render() {
		return ( 
		<div className = "ChartJPYLine">
			<Line 
				data = {this.state.chartDataLinear}
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
				}}
			/> 
		</div>
		);
	}
}

export default ChartJPYLine;