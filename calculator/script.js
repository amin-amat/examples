angular.module('calcApp',[])
.controller('calc', function($scope) {

	
})


.filter ('percent', ['$filter', function($filter) {
		return function (input, decimals) {
			return $filter('number')(input / 100, decimals);
		};
	}]);


