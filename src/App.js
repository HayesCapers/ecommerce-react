import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Home, ReduxRegister, ProductLine, Product } from './common'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div className='container main'>
						<Route exact path='/' component={Home} />
						<Route path='/shop/:pl' component={ProductLine} />
						<Route path='/product/:name/:pcode' component={Product} />
						<Route exact path='/register' component={ReduxRegister} />
					</div>	
				</div>
			</Router>
		);
	}
}

export default App;
