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
		});	
});



