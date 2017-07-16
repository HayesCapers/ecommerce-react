import React, { Component } from 'react';
import logo from '../../logo.svg';
// We need some glue between react and redux
// This component needs to know about state
import { connect } from 'react-redux';

class ReduxStudents extends Component{

	render(){
		console.log(this.props.students)
		var studentsArray = [];
		this.props.students.map((student,index)=>{
			studentsArray.push(<li key={index} className='student'>{student}</li>)
			return 'foobar';
		})
		return(
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to HELL</h2>
				</div>
				<p className="list">
					{studentsArray}
				</p>
			</div>	
		)
	}
}


// All containers that need access to state will have this function
// we are creating a mapping between redux state and the component props
function mapStateToProps(state){
	// mapStateToProps returns an object with each peice of state we need
	return{
		// from our master Reducer, we have a 'state' Object
		// both react and redux have state objects... dont get the two confused
		// Inside that state object, we have a property: students
		// This exists because we made it a property in the root reducer
		students: state.students
	}
}

// INSTEAD of exporting the component we export connect which gets the class
var ReduxStuds = connect(mapStateToProps)(ReduxStudents)

export { ReduxStuds }
