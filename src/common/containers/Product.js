import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import '../../App.css';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: []
		}
		
	}

	componentDidMount() {
		var pcode = this.props.match.params.pcode
		$.getJSON(`${window.hostAddress}/product/${pcode}`, (productData) => {
			// console.log(productData)
			this.setState({
				product: productData
			})
		})
	}		

	render(){
		console.log(this.state.product[0])
		if (this.state.product[0] === undefined){
			return(
				<div className='product-wrapper'>
					<h1>{this.props.match.params.name}</h1>
				</div>	
			)
		}
		return(
			<div className='product-wrapper'>
				<h1>{this.props.match.params.name}</h1>
				<h4>Vendor: {this.state.product[0].productVendor}</h4>
				<Link to={`/shop/${this.state.product[0].productLine}`}>{this.state.product[0].productLine}</Link>
				<p>{this.state.product[0].productDescription}</p>
				<h4>${this.state.product[0].buyPrice}</h4>
				<h4>In Stock: {this.state.product[0].quantityInStock}</h4>
			</div>	
		)
	}
}

export { Product }


