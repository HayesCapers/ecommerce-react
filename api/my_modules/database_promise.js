var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})

connection.connect();

function queryDataBase(query,options = null){
	return new Promise((resolve,reject)=>{
		connection.query(query,options,(error,results)=>{
			if (error) { 
				reject(error); 
			}
			resolve(results);
		});
	});
}

module.exports = queryDataBase

