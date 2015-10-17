angular.module('calcApp',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'calc2'
	})
	.when('/my-earnings', {
		templateUrl : 'my-earnings.html',
		controller : 'calc2'
	})
	.when('/new-meal', {
		templateUrl : 'new-meal.html',
		controller : 'calc'
	});
}])
.controller('calc', ["$scope", "$rootScope", function($scope, $rootScope) {


$scope.earnings = [];

$scope.update = function() {
	$scope.mealSubPrice = $scope.mealPrice;
	$scope.taxTotal		= ($scope.taxRate / 100) * $scope.mealPrice;
	$scope.tipTotal 	= ($scope.tipPercent / 100 ) * $scope.mealPrice;
	$scope.mealTotal 	= $scope.mealSubPrice + $scope.taxTotal + $scope.tipTotal;

	var calculateTip 	= $scope.tipTotal;
	$scope.earnings.push(calculateTip);

	$rootScope.tipEarningsTotal = $scope.tipEarnings();
	$rootScope.mealCount 		= $scope.earnings.length;
	$rootScope.tipMeal 			= $scope.tipEarningsTotal / $scope.earnings.length;
};

$scope.tipEarnings = function() {
	var sum = 0;
	$scope.earnings.map(function(item) {
		sum += item;
	});
	return (sum);
};

	
}])

.controller('calc2', ["$scope", "$rootScope", function($scope, $rootScope) {

	$scope.tipEarningsTotal = $rootScope.tipEarningsTotal;
	$scope.mealCount 		= $rootScope.mealCount;
	$scope.tipMeal 			= $rootScope.tipMeal;

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
}]);