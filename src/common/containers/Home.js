import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
		
	}

	componentDidMount() {
		$.getJSON(`${window.hostAddress}/productlines/get`, (productlinesData) => {
			// console.log(productlinesData);
			this.setState({
				productlines: productlinesData
			})
		})
		return 'FUck You'
	}

	render(){
		const pLines = []

		this.state.productlines.map((pl, index) => {
			pLines.push(<Link to={`/shop/${pl.link}`} key={index}>{pl.productLine}<br></br></Link>)
		})

		return(
			<div className='home-wrapper'>
				<h1>HOME PAGE</h1>
				{pLines}
			</div>
		)
	}
}

export { Home };