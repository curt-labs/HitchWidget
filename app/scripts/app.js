//'use strict';

angular.module('widgetApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'widgetApp.factories'
]).config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	}).otherwise({
		redirectTo: '/'
	});
});
