//angular.module("ccApp",['ngRoute','ngAnimate'])

viewsModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
	templateUrl : 'home.html',
	controller : 'home'
	})
	.when('/countries', {
	templateUrl : 'countries/countries_template.html',
	controller : 'countryData'
	})
	.when('/cities', {
	templateUrl : 'cities/city_template.html',
	controller : 'city'
	})
}])


.controller('home', ["$scope", function($scope) {

	
}]);



