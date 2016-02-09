viewsModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
	templateUrl : 'home.html',
	controller : 'home'
	})
	.when('/countries', {
	templateUrl : 'countries/countries_template.html',
	controller : 'countryData'
	})
	.when('/countries/:country/capital', {
	templateUrl : 'cities/city_template.html',
	controller : 'city'
	})
}]);



