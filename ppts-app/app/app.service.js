'use strict';

pptscontrolcenter.factory('UserState', [ '$window' , function ($window) {
	return {
		// Get cookies
		credentials : function(){
			if (typeof ($window.localStorage.getItem('officerCredentials')) != 'undefined'){
				var UserCredentials = $window.localStorage.getItem('officerCredentials');
				var credentials = JSON.parse(UserCredentials);
				return credentials;					
			}else{
				return {
					username : ''
				};
			}		
		},
		token : function(){
			var token = $window.localStorage.getItem('officerUserToken');
			return token;
		},
		islogged : function(){
			if (typeof ($window.localStorage.getItem('officerUserIsLoged')) != 'undefined') {
				var isLogged = $window.localStorage.getItem('officerUserIsLoged');
				return isLogged ;
			}
			else{
				return false;
			}
		},
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