angular.module('ccApp')
.controller('countryData', ["$scope", "geoData", function($scope, geoData) {
	geoData.countryInfo().then(function(res) {
		$scope.countries = res.data.geonames;
	});

}]);