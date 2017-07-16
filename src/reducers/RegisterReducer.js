var RegisterReducer = function(state = [], action){
	if (action.type === 'REGISTER_USER'){
		return action.payload
	}
	return state
}

export default RegisterReducer