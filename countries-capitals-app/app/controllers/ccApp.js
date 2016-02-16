angular.module('ccApp',[])
.config(['$routeProvider', function($routeProvider) {
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
}])

	.constant('OWM_API_PREFIX', 'http://api.geonames.org/countryInfoJSON?formatted=true&lang=eng&username=aminamat&style=full')

	.factory('ccAppRequest', ['$http', '$q', 'OWM_API_PREFIX', function($http, $q, OWM_API_PREFIX) {
		return function(params){
			var request = {
				callback : 'JSON_CALLBACK',
				outputMode : 'json'
			};
		return $http.get(OWM_API_PREFIX, {params: request})
			.then(function(response) {
				return $q.when(response.data.geonames);
			});
		};
	}])

	.factory('ccCountries',function($http, $q, OWM_API_PREFIX) {
		return function() {
		var defer = $q.defer();
      $http.get(OWM_API_PREFIX)
        .success(function(data) {
          defer.resolve(data);
        })
      return defer.promise;
		}
	})

.config(['$routeProvider', function($routeProvider) {
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











