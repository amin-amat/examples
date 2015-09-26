angular.module('calcApp',[])
.controller('calc', function($scope) {


$scope.earnings = [];


$scope.tipTotal = function() {
	return ($scope.tipPercent / 100 ) * $scope.mealPrice;
};

$scope.tipMeal = function() {
	return ($scope.tipEarningsTotal / $scope.mealCount);
};

$scope.mealCount = function() {
	return ($scope.earnings.length);

};

$scope.update = function() {
	var calculateTip = $scope.tipTotal();
	$scope.earnings.push(calculateTip);
}

$scope.tipEarningsTotal = function() {
	var sum = 0;
	$scope.earnings.map(function(item) {
		sum += item;
	});
	//console.log(sum);
	return (sum);
};

$scope.tipMeal = function() {
	return (($scope.tipEarningsTotal()) / $scope.earnings.length);
};

$scope.reset = function() {
	while($scope.earnings.length) {
		$scope.earnings.pop();
	}

};
	
})


.filter ('percent', ['$filter', function($filter) {
		return function (input, decimals) {
			return $filter('number')(input / 100, decimals);
		};
	}]);


