import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterAction from '../../actions/RegisterAction';
import { Form, FormControl, FormGroup, ControlLabel, Button, Col } from 'react-bootstrap';
import '../../App.css';


class Register extends Component{
	constructor(props) {
		super(props);

		this.handleRegistration = this.handleRegistration.bind(this)
		
	}

	handleRegistration(e) {
		e.preventDefault()
		var name = e.target[0].value
		var email = e.target[1].value
		var password = e.target[2].value
		var city = e.target[3].value
		var state = e.target[4].value
		var sRep = e.target[6].value
		var accountType = "customer"
		this.props.registerAction(name,email,password,city,state,sRep,accountType)
	}

	render(){
		console.log(this.props.registerSuccess)
		return(
			<div className='register-wrapper'>
				<Form horizontal onSubmit={this.handleRegistration}>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Name
						</Col>
						<Col componentClass={ControlLabel} sm={10}>
							<FormControl type='text' placeholder='Full Name' name='name' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col componentClass={ControlLabel} sm={10}>
							<FormControl type='text' placeholder='Email@email.com' name='email' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col componentClass={ControlLabel} sm={10}>
							<FormControl type='password' placeholder='Password' name='password' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							City
						</Col>
						<Col componentClass={ControlLabel} sm={10}>
							<FormControl type='text' placeholder='Atlanta' name='city' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							State
						</Col>
						<Col componentClass={ControlLabel} sm={10}>
							<FormControl type='text' placeholder='GA' name='state' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Account Type
						</Col>
						<Col componentClass={ControlLabel} sm={10}>
							<FormControl type='text' name='type' value='customer' disabled />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Sales Rep Name
						</Col>
						<Col componentClass={ControlLabel} sm={10}>
							<FormControl type='text' placeholder='employee name' name='rep' />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col className='button' sm={5}>
							<Button bsStyle='primary' bsSize='small' type='submit'>
								Submit
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>	
		)
	}
}

function mapStateToProps(state) {
	return {
		registerSuccess: state.registerState
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}

var ReduxRegister = connect(mapStateToProps,mapDispatchToProps)(Register)

export { ReduxRegister };










