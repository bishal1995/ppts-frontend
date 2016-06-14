'use strict';

pptscontrolcenter.controller('SessionqueryCtrl', ['$scope','UserState','$http', function ($scope,UserState,$http) {

	$scope.logindatestart = "1971-11-03";
	$scope.logindateend   = "2018-01-19";
	$scope.logoutdatestart= "1971-11-03";
	$scope.logoutdateend  = "2038-01-19";
	$scope.logintimestart = "00:00:00";
	$scope.logintimeend   = "23:59:59";
	$scope.logouttimestart= "00:00:00";
	$scope.logouttimeend  = "23:59:59";
	$scope.selectguard    = true;
	$scope.guard = "";
	$scope.sessions = {};
	$scope.showsessions = false ;
	$scope.search = function(){
		$scope.queryparameters = {
			'login' : {
				'data' : '1' ,
				'logindatestart' : $scope.logindatestart ,
				'logindateend' : $scope.logindateend ,
				'logintimestart' : $scope.logintimestart ,
				'logintimeend' : $scope.logintimeend
			},
			'logout' : {
				'data' : '1',
				'logoutdatestart' : $scope.logoutdatestart ,
				'logoutdateend' : $scope.logoutdateend ,
				'logouttimestart' : $scope.logouttimestart ,
				'logouttimeend' : $scope.logouttimeend
			},
			'guard' : {
				'data' : '1' ,
				'guard_id' : $scope.guard
			}
		};
		if ( $scope.selectguard == true )
			$scope.queryparameters.guard.data = '1' ;
		else
			$scope.queryparameters.guard.data = '0' ;

		$scope.headers = {
			'token' : UserState.token(),
			'Content-Type': 'application/json'			
		};
		$scope.config = {
			method : 'POST',
			url : 'http://localhost:8000/officer/sessiontimestampquery/',
			headers : $scope.headers,
			data : $scope.queryparameters
		};
		$http($scope.config)
			.then(
				function(response){
					$scope.sessions = response.data;
					$scope.showsessions = true;
				},
				function(){
					console.log('Something went wrong');
				}
			);
	};

}]);


