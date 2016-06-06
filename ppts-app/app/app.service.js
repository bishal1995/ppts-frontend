'use strict';

pptscontrolcenter.factory('UserState', [ '$window' , function ($window) {
	return {
		// Get cookies
		credentials : function(){
			var UserCredentials = $window.localStorage.getItem('officerCredentials');
			var credentials = JSON.parse(UserCredentials);
			return credentials;			
		},
		token : function(){
			var token = $window.localStorage.getItem('officerUserToken');
			return token;
		},
		islogged : function(){
			var isLogged = $window.localStorage.getItem('officerUserIsLoged');
			return isLogged;
		},
		// Set cookies
		set_credentials : function(UserData){
			$window.localStorage.setItem('officerCredentials',JSON.stringify(UserData));
			return true;
		},
		set_UserToken : function(UserToken){
			$window.localStorage.setItem('officerUserToken',UserToken);
			$window.localStorage.setItem('officerUserIsLoged',true);
			return true;
		},
		logout_User : function(){
			$window.localStorage.removeItem('officerUserCredentials');
			$window.localStorage.removeItem('officerUserToken');
			$window.localStorage.setItem('officerUserIsLoged',false);
			return true;
		}
	};
}]);