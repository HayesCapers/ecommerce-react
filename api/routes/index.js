var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productlines/get', (req,res,next) => {
	const selectQuery = 'SELECT * FROM productlines';
	connection.query(selectQuery,(error,results,fields) => {
		if (error){
			res.json(error)
		}else{
			res.json(results)
		}
	})
})

router.get('/productlines/:pl', (req,res,next) => {
	var pl = req.params.pl
	const productQuery = 'SELECT * FROM products WHERE productLine = ?'
	connection.query(productQuery,[pl], (error,results,fields) => {
		if (error) {
			res.json(error)
		}else {
			res.json(results)
		}
	})
})

router.get('/product/:pcode', (req,res,nest) => {
	var pcode = req.params.pcode
	const productDetailsQuery = 'SELECT * FROM products WHERE productCode = ?'
	connection.query(productDetailsQuery, [pcode], (error,results,fields) => {
		if (error) {
			res.json(error)
		}else {
			res.json(results)
		}
	})
})

module.exports = router;
