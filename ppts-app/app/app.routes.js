'use strict';

pptscontrolcenter.config(function($routeProvider){
	$routeProvider
		.when('/officerlogin', {
			templateUrl: 'app/components/officerlogin/officerlogin.html',
			controller : 'LoginCtrl'
		})
		.when('/controlpannel', {
			templateUrl: 'app/components/controlpannel/controlpannel.html',
			controller : 'ControlPannelCtrl'
		})
		.when('/dashboard', {
			templateUrl: 'app/components/dashboard/dashboard.html',
			controller : 'DashBoardCtrl'
		})
		.when('/footer', {
			templateUrl: 'app/components/footer/footer.html',
			controller: 'FooterCtrl'
		})
		.when('/map', {
			templateUrl: 'app/components/map/map.html',
			controller: 'MapCtrl'
		})
		.when('/test', {
			templateUrl: 'app/components/test/test.html'
		})
		.when('/search', {
			templateUrl: 'app/components/searchguard/searchguard.html',
			controller: 'SearchCtrl'
		})
		.when('/lastsession', {
			templateUrl: 'app/components/lastsession/lastsession.html',
			controller: 'LastsessionCtrl'
		})
		.when('/sessionquery', {
			templateUrl: 'app/components/sessionquery/sessionquery.html',
			controller: 'SessionqueryCtrl'
		})
		.when('/locationquery', {
			templateUrl: 'app/components/locationquery/locationquery.html',
			controller: 'LocationqueryCtrl'
		})
		.when('/traceroute', {
			templateUrl: 'app/components/polyline/polyline.html',
			controller: 'PolylineCtrl'
		})
		;	
});



