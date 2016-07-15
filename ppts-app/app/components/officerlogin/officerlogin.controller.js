'use strict';

pptscontrolcenter.controller('LoginCtrl', ['$scope','$http','UserState','$location',function ($scope,$http,UserState,$location) {

		this.username = "";
		this.password = "";
		$scope.login = function(){
			$scope.timestamp = new Date();
			$scope.datetime = $scope.timestamp.toISOString();
			$scope.cdate = $scope.datetime.substring(0,10);
			$scope.time = $scope.datetime.substring(11,19);
			$scope.UserCredentials = {
				'username' : this.username,
				'password' : this.password
			};
			$scope.BasicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
			$scope.headers = {
				'Authorization' : $scope.BasicAuth,
				'cdate' : $scope.cdate ,
				'time' : $scope.time ,
				'Content-Type': 'text/plain'
			};
			$scope.config = {
				method : 'POST',
				url : 'http://localhost:8000/officer/login/',
				headers : $scope.headers
			};
			$http($scope.config)
				.then(
					function(response){
						UserState.set_UserToken(response.headers('session_id'));
						UserState.set_credentials($scope.UserCredentials);
						console.log('User Logged Sucessfuly');
						$location.path('/search');


					},
					function(){
						UserState.logout_User();
						console.log('Invalid Username or Password');
					}
				);
		};
}]);


















































































