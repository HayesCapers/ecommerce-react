import $ from 'jquery'

var registerAction = function(name,email,password,city,state,sRep,accountType) {
	var userInfo = {
		name: name,
		email: email,
		password: password,
		city: city,
		state: state,
		sRep: sRep,
		accountType: accountType
	}
	var baseUrl = `${window.hostAddress}/register`
	var thePromise = $.ajax({
		type: 'POST',
		url: baseUrl,
		data: userInfo
	})
	return {
		type: 'REGISTER_USER',
		payload: thePromise
	}
}

export default registerAction