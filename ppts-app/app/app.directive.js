'use strict';

pptscontrolcenter.directive('ControlPannel', [function () {
	return {
		restrict: 'A',
		replace : true,
		templateUrl : 'app/components/controlpannel/controlpannel.html',
		controller : 'ControlPannelCtrl'
	};
}]);



pptscontrolcenter.directive('Footer', [function () {
	return {
		restrict: 'A',
		replace : true,
		templateUrl : 'app/components/footer/footer.html',
		controller : 'FooterCtrl'
	};
}]);