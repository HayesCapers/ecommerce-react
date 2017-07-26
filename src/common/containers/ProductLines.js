import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../../App.css';
import ProductTableRow from '../components/ProductTableRow';

class ProductLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			lastColumnName: '',
			toggleSort: false
		}

		this.sortTable = this.sortTable.bind(this);
		this.getProducts = this.getProducts.bind(this);
	}

	componentDidMount() {
		this.getProducts(this.props)
	}

	componentWillReceiveProps(nextProps){
		this.getProducts(nextProps)
	}

	getProducts(props) {
		var pl = props.match.params.pl
		$.getJSON(`${window.hostAddress}/productlines/${pl}`, (productData) => {
			this.setState({
				productList: productData
			})
		})
	}

	sortTable(columnName){
		var AriaStark = this.state.productList.slice();
		var toggle = this.state.toggleSort

		if((columnName !== this.state.lastColumnName) && (toggle)){
			toggle = !toggle
		}

		AriaStark.sort((a, b) => {
			var textA = a[columnName]
			var textB = b[columnName]
			if(toggle){
				return (textA > textB) ? -1 : (textA < textB) ? 1 : 0
			}else{
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
			}	
		})

		this.setState({
			productList: AriaStark,
			lastColumnName: columnName,
			toggleSort: !toggle
		})
	}

	render() {

		// console.log(this.state.productList)

		var productTableArray = [];

		this.state.productList.map((product, index) => {
			productTableArray.push(<ProductTableRow key={index} product={product} />)
		})

		return(
			<div className='product-table'>
				<h1>{this.props.match.params.pl}</h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<th className="table-head" onClick={()=>{this.sortTable("productName")}}>Product Name</th>
							<th className="table-head" onClick={()=>{this.sortTable("productScale")}}>Model Scale</th>
							<th className="table-head" onClick={()=>{this.sortTable("productVendor")}}>Made By</th>
							<th className="table-head" onClick={()=>{this.sortTable("productDescription")}}>Description</th>
							<th className="table-head" onClick={()=>{this.sortTable("quantityInStock")}}>In Stock</th>
							<th className="table-head" onClick={()=>{this.sortTable("buyPrice")}}>Your Price!</th>
							<th className="table-head" onClick={()=>{this.sortTable("MSRP")}}>MSRP</th>
						</tr>
					</thead>
					<tbody>
						{productTableArray}
					</tbody>
				</table>
			</div>
		)
	}
}

export { ProductLine }

