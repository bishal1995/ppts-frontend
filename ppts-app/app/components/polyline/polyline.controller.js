'use strict';

pptscontrolcenter.controller('PolylineCtrl', ['$scope','uiGmapGoogleMapApi','UserState','$http', function ($scope,uiGmapGoogleMapApi,UserState,$http) {
	console.log('PolylineCtrl Created');
		$scope.displaymap = false;
		$scope.sessionID = "";
		$scope.sessiondetails = {};
		$scope.search = function(){
			$scope.headers = {
				'authtoken' : UserState.token(),
				'guardtoken' : $scope.sessionID,
				'Content-Type': 'text/plain'			
			};
			$scope.config = {
				method : 'POST',
				url : 'http://localhost:8000/officer/getsessionpath/',
				headers : $scope.headers,
			};
			$http($scope.config)
				.then(
					function(response){
						$scope.sessiondetails = response.data;
						console.log(response.data);
						$scope.displaymap = true;

						$scope.activity = [] ;// $scope.sessiondetails.activity ;


						for ( var key in $scope.sessiondetails.activity ){
							$scope.activity.push(
								{
									latitude : parseFloat($scope.sessiondetails.activity[key].lattitude),
									longitude : parseFloat($scope.sessiondetails.activity[key].longitude)
								}
							);
						}








						console.log($scope.activity);
						$scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4, bounds: {}};
				        $scope.polylines = [];
				        uiGmapGoogleMapApi.then(function(){
				          $scope.polylines = [
				            {
				                path: $scope.activity  ,
				                stroke: {
				                    color: '#6060FB',
				                    weight: 3
				                },

				                geodesic: true,
				                visible: true,
				                icons: [{
				                    icon: {
				                        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
				                    },
				                    offset: '25px',
				                    repeat: '50px'
				                }]
				            }
				        ];
				        });

					},
					function(){
						console.log('Something went wrong');
					}
				);




		};


}]);