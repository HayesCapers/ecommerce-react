import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Register from './containers/Register';
import ProductLines from './containers/ProductLines';
import Product from './containers/Product';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div className='container main'>
						<Route exact path='/' component={Home} />
						<Route path='/shop/:pl' component={ProductLines} />
						<Route path='/product/:name/:pcode' component={Product} />
						<Route exact path='/register' component={Register} />
					</div>	
				</div>
			</Router>
		);
	}
}

export default App;
