angular.module("searchApp",[])
.controller("searchCtrlr", function($scope, $http) {
	$scope.search = false;
	$scope.searchOver = false;

	$scope.searchTerm = function(tag) {
		$scope.tag = tag;
		var url = 'https://api.instagram.com/v1/tags/'+ $scope.tag + '/media/recent';
		
		var request = {
			client_id : 'f35922a5fd7e427bbec17398c8fd9e9b',
			client_secret : 'afe6c4a07d384a49ac9f31925c4f0ff9',
			//outputMode : 'json',
			callback : 'JSON_CALLBACK'
		};
	
	$http({
		method: 'JSONP',
		url: url,
		params: request
	})
	.then(function(response) {
		$scope.results = response.data;
		$scope.search = false;
		$scope.searchOver = true;
	},
	function(response) {
      alert('error');
	});
};
	

	

});