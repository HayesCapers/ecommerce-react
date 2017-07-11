import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App'
import ReduxStudents from './containers/ReduxStudents';

// Go get the createStore method from the redux module
import { createStore } from 'redux';
// import Provider from react-redux as a connection (middleman) between react and redux
import { Provider } from 'react-redux';

// import the rootreducer so we can give it to the store
import reducers from './reducers/rootReducer';

const theStore = createStore(reducers);


// ReactDom.render takes two args:
// 1. what
// 2. where
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

