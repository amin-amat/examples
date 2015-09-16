angular.module('myApp', []).
controller('madLibs', function($scope) {
	$scope.male =[
		{
		id: 'man',
		noun: 'he',
		possesiveNoun : 'his'
		}
		];
	$scope.female =[
		{
		id: 'woman',
		noun: 'she',
		possesiveNoun : 'her'
		}
	];
	
	
});