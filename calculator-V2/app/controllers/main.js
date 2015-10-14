angular.module('calcApp',[])
.controller('calc', function($scope) {


$scope.earnings = [];

$scope.update = function() {
	$scope.mealSubPrice = $scope.mealPrice;
	$scope.taxTotal		= ($scope.taxRate / 100) * $scope.mealPrice;
	$scope.tipTotal 	= ($scope.tipPercent / 100 ) * $scope.mealPrice;
	$scope.mealTotal 	= $scope.mealSubPrice + $scope.taxTotal + $scope.tipTotal;

	var calculateTip 	= $scope.tipTotal;
	$scope.earnings.push(calculateTip);

	$scope.tipEarningsTotal = $scope.tipEarnings();
	$scope.mealCount 		= $scope.earnings.length;
	$scope.tipMeal 			= $scope.tipEarningsTotal / $scope.earnings.length;
};

$scope.tipEarnings = function() {
	var sum = 0;
	$scope.earnings.map(function(item) {
		sum += item;
	});
	return (sum);
};

$scope.reset = function() {
	while($scope.earnings.length) {
		$scope.earnings.pop();
	}
	$scope.mealSubPrice 	= 0;
	$scope.taxTotal 		= 0;
	$scope.tipTotal 		= 0;
	$scope.mealTotal 		= 0;
	$scope.tipEarningsTotal = 0;
	$scope.mealCount 		= 0;
	$scope.tipMeal 			= 0;
};



	
});