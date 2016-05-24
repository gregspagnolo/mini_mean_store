// ############## USER FACTORY ##############

myApp.factory('UserFactory', function($http) {
	var obj = {};
	obj.loggedInUser = null;
	
	obj.getAll = function(callback) {
		$http.get('/users').success(function(users) {
			callback(users);
		});
	};
	
	obj.create = function(user, callback) {
		$http.post('/users', user).success(function (output) {
			obj.loggedInUser = output;
			callback();	
		});
	};
	

	return obj;
});

// ############## CUSTOMERS FACTORY ##############

myApp.factory('CustomerFactory', function($http, $routeParams) {
	return {
		getAll: function(callback) {
			$http.get('/customers').success(function(customers) {
				callback(customers);
			});
		},
		create: function(customer, callback) {
			$http.post('/customers', customer).success(callback);
		},
		destroy: function(customer, callback) {
			$http.delete('/customers/' + customer._id, customer).success(function() {
				callback();
			});
		},
		update: function(customer, callback) {
			console.log(customer);
			$http.put('/customers/' + customer._id, customer).success(callback);
		},
		show: function(callback) {
			console.log('Im in the customers factory');
			$http.get('/customers/' + $routeParams.id).success(callback);
		}
	};
});



// ############## PRODUCT FACTORY ##############

myApp.factory('ProductFactory', function($http) {
	return {
		getAll: function(callback) {
			$http.get('/products').success(function(products) {
				callback(products);
			});
		},
		create: function(product, callback) {
			$http.post('/products/', product).success(callback);
		},
	};
});


// ############## ORDER FACTORY ##############

myApp.factory('OrderFactory', function($http) {
	return {
		getAll: function(callback) {
			$http.get('/orders').success(function(orders) {
				callback(orders);
			});
		},
		create: function(order, callback) {
			$http.post('/orders', order).success(function(order) {
				callback(order);
			});
		},
		destroy: function(order, callback) {
			$http.delete('/orders/' + order._id, order).success(function(order) {
				callback(order);
			});
		},
	};
});



















