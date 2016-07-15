'use strict';

pptscontrolcenter.controller('ControlPannelCtrl', ['$scope','UserState','$http','$location', function ($scope,UserState,$http,$location) {

	$scope.showsidepannel = UserState.islogged() ;
	$scope.logout = function(){
		$scope.timestamp = new Date();
		$scope.datetime = $scope.timestamp.toISOString();
		$scope.cdate = $scope.datetime.substring(0,10);
		$scope.time = $scope.datetime.substring(11,19);

		$scope.headers = {
			'token' : UserState.token(),
			'cdate' : $scope.cdate ,
			'time'	: $scope.time
		};
		$scope.config = {
			method : 'POST',
			url : 'http://localhost:8000/officer/logout/',
			headers : $scope.headers
		};
		$http($scope.config)
			.then(
				function(response){
					console.log('User Logged off Sucessfuly');
					UserState.logout_User();
					$location.path('/officerlogin');
				},
				function(){
					console.log('Cannot logout');
				}
			);
		console.log('logout');
	};

}]);