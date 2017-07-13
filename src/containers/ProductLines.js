import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import $ from 'jquery';
import '../App.css';

class ProductLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		var pl = this.props.match.params.pl
		console.log(pl)
		$.getJSON(`${window.hostAddress}/productlines/${pl}`, (productData) => {
			console.log(productData)
			this.setState({
				products: productData
			})
		})
	}

	componentWillReceiveProps(nextProps){
		var pl = nextProps.match.params.pl
		console.log(pl)
		$.getJSON(`${window.hostAddress}/productlines/${pl}`, (productData) => {
			console.log(productData)
			this.setState({
				products: productData
			})
		})
	}

	render() {

		const productList = [];
		this.state.products.map((product,index) => {
			productList.push(
				<li key={index}><Link to={`/product/${product.productName}/${product.productCode}`}>{product.productName}</Link></li>
			)
		})
		return(
			<div className='product-wrapper'>
				<h1>{this.props.match.params.pl}</h1>
				<div className='product-list-wrapper'>
					<ul>
						{productList}
					</ul>
				</div>
			</div>
		)
	}
}

export default ProductLine