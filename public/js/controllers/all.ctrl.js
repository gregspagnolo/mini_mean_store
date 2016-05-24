// ############## USERS CONTROLLER ##############

myApp.controller('UsersController', function(UserFactory, $location) {
	var _this = this;

	function getAll() {
		UserFactory.getAll(function(users) {
			_this.users = users;
		});
	}

	this.create = function(user) {
		UserFactory.create(user, function(errors) {
			$location.url('/dashboard');
			getAll();
		});
	};
});

// ############## DASHBOARD CONTROLLER ##############

myApp.controller('DashboardController', function(ProductFactory, OrderFactory, CustomerFactory) {

	var _this = this;

	function getAllProducts() {
		ProductFactory.getAll(function(products) {
			_this.products = products;
		});
	}

	function getAllCustomers() {
		CustomerFactory.getAll(function(customers) {
			_this.customers = customers;
		});
	}

	function getAllOrders() {
		OrderFactory.getAll(function(orders) {
			_this.orders = orders;
		});
	}

	getAllCustomers();
	getAllProducts();
	getAllOrders();

});




// ############## CUSTOMERS CONTROLLER ##############

myApp.controller('CustomersController', function(CustomerFactory, $routeParams, $location) {
	var _this = this;


	function getAll() {
		CustomerFactory.getAll(function(customers) {
			_this.customers = customers;
		});
	}

	getAll();

	this.create = function(customer) {
		CustomerFactory.create(customer, function(errors) {
			_this.errors = errors;
			getAll();
		});
	};
	this.destroy = function(customer) {
		CustomerFactory.destroy(customer, function(errors) {
			_this.errors = errors;
			getAll();
		});
	}; 
	this.update = function(customer) {
		CustomerFactory.update(customer, function(errors) {
			$location.url('/customers');
			getAll();
		});
	};
	this.show = function(customer) {
		CustomerFactory.show(function(data) {
			_this.customer = data;
		});
	};
	this.show();
});

// ############## PRODUCTS CONTROLLER ##############

myApp.controller('ProductsController', function(ProductFactory) {
	var _this = this;

	function getAll() {
		ProductFactory.getAll(function(products) {
			_this.products = products;
		});
	}
	getAll();

	this.create = function(product) {
		ProductFactory.create(product, function(errors) {
			_this.errors = errors;
			getAll();
		});
	};
	this.destroy = function(product) {
		ProductFactory.destroy(product, function(errors) {
			_this.errors = errors;
			getAll();
		});
	};

});


// ############## ORDERS CONTROLLER ##############

myApp.controller('OrdersController', function(OrderFactory, CustomerFactory, ProductFactory, UserFactory, $location) {
	var _this = this;

	this.loggedInUser = UserFactory.loggedInUser;

	function getAllProducts() {
		ProductFactory.getAll(function(products) {
			_this.products = products;
		});
	}
	
	function getAllCustomers() {
		CustomerFactory.getAll(function(customers) {
			_this.customers = customers;
		});
	}

	function getAllUsers() {
		UserFactory.getAll(function(users) {
			_this.users = users;
		});
	}

	function getAllOrders() {
		OrderFactory.getAll(function(orders) {
			_this.orders = orders;
		});
	}

	this.create = function(order) {
		order.user = UserFactory.loggedInUser;
		OrderFactory.create(order, function(data) {
			getAllOrders();
		});
	};

	this.destroy = function(order) {
		OrderFactory.destroy(order, function(errors) {
			$location.url('/orders');
			_this.errors = errors;
			getAllOrders();

		});
	};

	getAllCustomers();
	getAllProducts();
	getAllOrders();
	getAllUsers();


});



















