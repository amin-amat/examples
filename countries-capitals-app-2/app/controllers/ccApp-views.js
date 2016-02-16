angular.module('ccApp')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
	templateUrl : '../views/home/home.html'
	//controller : 'home'
	})
	.when('/countries', {
	templateUrl : '../views/countries/countries_template.html',
	controller : 'countryData'
	})
	.when('/countries/:country', {
	templateUrl : '../views/cities/city_template.html',
	controller : 'city'
	})
}]);