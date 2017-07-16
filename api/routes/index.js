var mine = require('../my_modules')

/* GET home page. */
mine.router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

mine.router.get('/productlines/get', (req,res,next) => {
	const selectQuery = 'SELECT * FROM productlines';
	mine.dbQuery(selectQuery)
		.then(results => {
			res.json(results)
		});
});

mine.router.get('/productlines/:pl', (req,res,next) => {
	var pl = req.params.pl
	const productQuery = 'SELECT * FROM products WHERE productLine = ?'
	mine.dbQuery(productQuery,[pl])
		.then((results) => {
			res.json(results)
		});
});

mine.router.get('/product/:pcode', (req,res,next) => {
	var pcode = req.params.pcode
	const productDetailsQuery = 'SELECT * FROM products WHERE productCode = ?'
	mine.dbQuery(productDetailsQuery,[pcode])
		.then((results) => {
			res.json(results)
		});
});

mine.router.post('/register', (req,res,next) =>{
	const dt = req.body
	const password = bcrypt.hashSync(req.body.password)
	const creditLimit = 16000000
	var token;
	var insertQuery = 'INSERT INTO users (uid,type,password,token) VALUES (?,?,?,?)'
	var insertIntoCust = 'INSERT INTO customers (customerName,city,state,salesRepEmployeeNumber,creditLimit) VALUES (?,?,?,?,?)'
	var promise = mine.dbQuery(insertIntoCust,[dt.name,dt.city,dt.state,1337,creditLimit])
	promise.then((results) => {
		token = mine.randToken.uid(40);
		var newID = results.insertId;
		return mine.dbQuery(insertQuery,[newID,dt.accountType,password,token])
	}).then((ress) => {
		res.json({
			msg: 'success',
			token: token
		});
	});
});



module.exports = mine.router;
