var myApp = angular.module('myApp', ['ngMessages', 'ngRoute']);

angular.module('myApp').filter('fromNow', function() {
	return function(date) {
		return moment(date).fromNow();
	};
});
