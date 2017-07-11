import React, { Component } from 'react';

class Student extends Component{
	constructor(props) {
		super(props);
		this.state = {
			students: []
		}
	}

	componentDidMount() {
		var students = [
			'Hayes',
			'Micheal',
			'Carla',
			'YingRong'
		]
		this.setState({
			students: students
		})
	}


	render(){
		var studentArray = [];
		this.state.students.map((student,index)=>{
			studentArray.push(<li key={index}>{student}</li>)
		})
		return(
			<div className='list'>
				{studentArray}
			</div>
		)
	}
}

export default Student;