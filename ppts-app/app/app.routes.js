'use strict';

pptscontrolcenter.config(function($routeProvider){
	$routeProvider
		.when('/officerlogin', {
			templateUrl: 'app/components/officerlogin/officerlogin.html',
			controller : 'LoginCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/controlpannel', {
			templateUrl: 'app/components/controlpannel/controlpannel.html',
			controller : 'ControlPannelCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/footer', {
			templateUrl: 'app/components/footer/footer.html',
			controller: 'FooterCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/map', {
			templateUrl: 'app/components/map/map.html',
			controller: 'MapCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/test', {
			templateUrl: 'app/components/test/test.html',
			controller : 'TestCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/search', {
			templateUrl: 'app/components/searchguard/searchguard.html',
			controller: 'SearchCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/lastsession', {
			templateUrl: 'app/components/lastsession/lastsession.html',
			controller: 'LastsessionCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/sessionquery', {
			templateUrl: 'app/components/sessionquery/sessionquery.html',
			controller: 'SessionqueryCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/locationquery', {
			templateUrl: 'app/components/locationquery/locationquery.html',
			controller: 'LocationqueryCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		.when('/traceroute', {
			templateUrl: 'app/components/polyline/polyline.html',
			controller: 'PolylineCtrl',
			resolve : {
				"check" : function(UserState,$location){
					if( UserState.islogged() ){
						// He is authenticated, cannot do any thing 
					}else{
						$location.path('/officerlogin')
					}
				}
			}
		})
		;	
});



