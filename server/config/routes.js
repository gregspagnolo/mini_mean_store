var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');
var users = require('../controllers/users.js');

module.exports = function(app) {

	//User Routes
	app.get('/users', users.index);
	app.post('/users', users.create);

	//Customer Routes
	app.get('/customers', customers.index);
	app.post('/customers', customers.create);
	app.delete('/customers/:id', customers.destroy);
	app.put('/customers/:id', customers.update);
	app.get('/customers/:id', customers.show);

	//Product Routes
	app.get('/products', products.index);
	app.post('/products', products.create);

	//Order Routes
	app.get('/orders', orders.index);
	app.post('/orders', orders.create);
	app.delete('/orders/:id', orders.destroy);

};