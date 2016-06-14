'use strict';

pptscontrolcenter.controller('LocationqueryCtrl',['$scope','UserState','$http', function ($scope,UserState,$http) {
	console.log('LocationqueryCtrl Created');

	$scope.lattitudestart = "-90.000000";
	$scope.longitudestart = "-180.000000";
	$scope.lattitudeend = "90.000000";
	$scope.longitudeend = "180.000000";
	$scope.datestart = "1971-11-03";
	$scope.dateend   = "2018-01-19";
	$scope.timestart = "00:00:00";
	$scope.timeend   = "23:59:59";
	$scope.selectguard    = false ;
	$scope.gsession = "";
	$scope.sessions = {};
	$scope.showsessions = false ;

	$scope.search = function(){
		$scope.queryparameters = {
			'lattitude' : {
				'data' : '1' ,
				'lattitudestart' : $scope.lattitudestart ,
				'lattitudeend' : $scope.lattitudeend
			},
			'longitude' : {
				'data' : '1' ,
				'longitudestart' : $scope.longitudestart ,
				'longitudeend' : $scope.longitudeend
			},
			'date' : {
				'data' : '1' ,
				'datestart' : $scope.datestart ,
				'dateend' : $scope.dateend
			},
			'time' : {
				'data' : '1' ,
				'timestart' : $scope.timestart ,
				'timeend' : $scope.timeend
			},
			'session' : {
				'data' : '1' ,
				'session_id' : $scope.gsession
			}
		};
		if ( $scope.selectguard == true )
			$scope.queryparameters.session.data = '1' ;
		else
			$scope.queryparameters.session.data = '0' ;

		$scope.headers = {
			'token' : UserState.token(),
			'Content-Type': 'application/json'			
		};
		$scope.config = {
			method : 'POST',
			url : 'http://localhost:8000/officer/locationquery/',
			headers : $scope.headers,
			data : $scope.queryparameters
		};
		$http($scope.config)
			.then(
				function(response){
					$scope.sessions = response.data;
					console.log(response.data);
					$scope.showsessions = true;
				},
				function(){
					console.log('Something went wrong');
				}
			);
	};


}]);

