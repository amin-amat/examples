angular.module('ccApp')
.controller('country', ["$scope", "geoData", "geoData_neighbor", "geoData_cap", "countryDetail", function($scope, geoData, geoData_neighbor, geoData_cap, countryDetail) {
	var url_string = '&country=';
	var cDetail = String(countryDetail.country).substring(1);
	var url = url_string + cDetail;

	geoData.countryInfo(url).then(function(res) {
		$scope.info = res.data.geonames[0];
		var id = String(res.data.geonames[0].geonameId);
		var capital = encodeURIComponent(res.data.geonames[0].capital);

	//Get Neighboring Country Info
		geoData_neighbor.neighbor(id).then(function(response) {
			$scope.neighbors = response.data.geonames;
		});

	//Get Capital Info
		geoData_cap.capital(capital,cDetail).then(function(response) {
			$scope.capital = response.data.geonames[0];
		
		});

	})

}]);