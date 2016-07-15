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
						$scope.displaymap = true;
						$scope.activity = [] ;

						console.log($scope.sessiondetails);

						for ( var key in $scope.sessiondetails.activity ){
							$scope.activity.push(
								{
									latitude : parseFloat($scope.sessiondetails.activity[key].lattitude),
									longitude : parseFloat($scope.sessiondetails.activity[key].longitude)
								}
							);
						}
						$scope.nooflocation = 0.0;
						$scope.tlatitude = 0.0;
						$scope.tlongitude = 0.0;
						for( var key in $scope.activity ){
							$scope.tlatitude = $scope.tlatitude + $scope.activity[key].latitude ;
							$scope.tlongitude = $scope.tlatitude + $scope.activity[key].latitude ;
							$scope.nooflocation = $scope.nooflocation + 1.0 ;
						}
						$scope.activitycenter = {
							latitude : ( $scope.tlatitude / $scope.nooflocation ) ,
							longitude : ( $scope.tlongitude / $scope.nooflocation )
						};
						$scope.map = {center: $scope.activitycenter , zoom: 4, bounds: {}};
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
				        $scope.markers = [];
				        for( var key2 in $scope.activity ){
				        	$scope.markers.push({
				        		id : key2,
				        		coords:{
				        			latitude : $scope.activity[key2].latitude,
				        			longitude : $scope.activity[key2].longitude
				        		},
				        		data : 'Arival-Date : ' + $scope.sessiondetails.activity[key2].arivaldate + ' , Arival-time : ' + $scope.sessiondetails.activity[key2].arivaltime
				        	});
				        }
						$scope.windows = {
							model: {},
							show: false,
							options:{
							  pixelOffset: {width:-1,height:-20}
							}
						};
				        $scope.markersEvents = {
							click: function(marker, eventName, model, args) {
							$scope.windows.model = model;
							$scope.windows.show = true;  
							}
						};
					},
					function(){
						console.log('Something went wrong');
					}
				);
		};
}])
.controller('templateController',function(){});