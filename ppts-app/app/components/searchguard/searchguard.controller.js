'use strict';

pptscontrolcenter.controller('SearchCtrl', ['$scope','UserState','$http', function ($scope,UserState,$http) {
	console.log('SearchCtrl created');
	this.firstname = "";
	this.lastname = " ";
	$scope.showguard = true;
	$scope.guard = {};

	$scope.search = function(){
		if (this.lastname == ""){
			this.lastname = " ";
		}
		else{
			this.foo = 1;
		}
		$scope.headers = {
			'token' : UserState.token(),
			'firstname' : this.firstname,
			'lastname' : this.lastname,
			'Content-Type': 'text/plain'
		};
		$scope.config = {
			method : 'POST',
			url : 'http://localhost:8000/officer/getname/',
			headers : $scope.headers
		};
		$http($scope.config)
			.then(
				function(response){
					$scope.guard = response.data;
					$scope.showguard = false;
				},
				function(){
					console.log('Invalid token Wrong');
				}
			);
	};
}]);

