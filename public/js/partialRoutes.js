myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'UsersController',
		controllerAs: 'userctrl',
		templateUrl: '/partials/login.html'
	})
	.when('/dashboard', {
		controller: 'DashboardController',
		controllerAs: 'dashboardctrl',
		templateUrl: '/partials/dashboard.html'
	})
	.when('/products', {
		controller: 'ProductsController',
		controllerAs: 'productctrl',
		templateUrl: '/partials/products.html'
	})
	.when('/orders', {
		controller: 'OrdersController',
		controllerAs: 'orderctrl',
		templateUrl: '/partials/orders.html'
	})
	.when('/customers', {
		controller: 'CustomersController',
		controllerAs: 'custctrl',
		templateUrl: '/partials/customers.html'
	})
	.when('/customers/:id', {
		controller: 'CustomersController',
		controllerAs: 'custctrl',
		templateUrl: '/partials/edit.html'
	})
	.otherwise('/', {
		templateUrl: '/partials/dashboard.html'
	});
});