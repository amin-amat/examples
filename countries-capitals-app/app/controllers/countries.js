viewsModule.controller('countryData', ["$scope","$http", function($scope, $http) {
		$scope.user = "aminamat";
		var url = 'http://api.geonames.org/countryInfoJSON?formatted=true&lang=eng&username='+ $scope.user +'&style=full';

		var request = {
			callback : 'JSON_CALLBACK',
			outputMode : 'json'
		};

		$http({
			method: 'JSONP',
			url: url,
			params: request
		})
		.then(function(response) {
			$scope.countries = response.data.geonames;
			//console.log($scope.countries);
		},
		function(response) {
			alert('error');
		});
	
}]);