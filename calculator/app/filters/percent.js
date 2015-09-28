angular.module('calcApp',[])

.filter ('percent', ['$filter', function($filter) {
		return function (input, decimals) {
			return $filter('number')(input / 100, decimals);
		};
	}]);