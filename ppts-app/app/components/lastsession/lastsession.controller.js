'use strict';

pptscontrolcenter.controller('LastsessionCtrl', ['$scope','UserState','$http',function ($scope,UserState,$http) {
	console.log('LastsessionCtrl created');
	this.guardid = "";
	$scope.showsession = true;
	$scope.session = {};
	$scope.search = function(){

		$scope.headers = {
			'token' : UserState.token(),
			'guard' : this.guardid,
			'Content-Type': 'text/plain'
		};
		$scope.config = {
			method : 'POST',
			url : 'http://localhost:8000/officer/getlastsession/',
			headers : $scope.headers
		};
		$http($scope.config)
			.then(
				function(response){
					$scope.session = response.data;
					$scope.showsession = false;
					console.log($scope.session);
				},
				function(){
					console.log('Invalid token Wrong');
				}
			);
	};
}]);