angular.module('ccApp',['ngRoute', 'ngAnimate'])


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
	templateUrl : '../views/country/country_template.html',
	controller : 'country',
	resolve : {
		countryDetail : [
		'$route',
		function($route) {
			return ($route.current.params);
		}
		]
	}
	})
}])

.factory('geoData', ['$http', '$q', function($http,$q) {

	var baseurl = 'http://api.geonames.org/countryInfoJSON?formatted=true&lang=eng&username=aminamat&style=full';
	
	return {
		countryInfo: function(path){
			var myPromise = $q.defer();
			//console.log(baseurl+path);
		$http.get(baseurl + path)
		.then(function(res){
			myPromise.resolve(res);

		},myPromise.reject);
		return myPromise.promise;
		}
	};

	
}])

.factory('geoData_neighbor', ['$http', '$q', function($http,$q) {
	return {
		neighbor: function(id){
			baseurl = 'http://api.geonames.org/neighboursJSON?formatted=true&username=aminamat&geonameId='+ id +' ';

			var myPromise = $q.defer();
			//console.log(baseurl+path);
		$http.get(baseurl)
		.then(function(res){
			myPromise.resolve(res);

		},myPromise.reject);
		return myPromise.promise;
		}
	};

	
}])


.factory('geoData_cap', ['$http', '$q', function($http,$q) {
	return {
		capital: function(capital,countryCode){
			baseurl ='http://api.geonames.org/searchJSON?username=aminamat&formatted=true&name_equals='+ capital +'&country='+ countryCode +'&cities=cities15000'

			var myPromise = $q.defer();
			console.log(baseurl);
		$http.get(baseurl)
		.then(function(res){
			myPromise.resolve(res);

		},myPromise.reject);
		return myPromise.promise;
		}
	};

	
}]);


