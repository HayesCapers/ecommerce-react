import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App'


// Go get the createStore method from the redux module
import { createStore, applyMiddleware } from 'redux';

// import Provider from react-redux as a connection (middleman) between react and redux
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';

// import the rootreducer so we can give it to the store
import reducers from './reducers/rootReducer';

const initStore = applyMiddleware(reduxPromise)(createStore)
const theStore = initStore(reducers);


// ReactDom.render takes two args:
// 1. what
// 2. where
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

