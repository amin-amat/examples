angular.module('ccApp')
.controller('countryData', ["$scope", "geoData", function($scope, geoData) {
	//console.log(geoData.countryInfo());
	geoData.countryInfo().then(function(res) {
		$scope.countries = res.data.geonames;
	});

}]);