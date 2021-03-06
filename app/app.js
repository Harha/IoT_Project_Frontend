// Non-angular includes
var jquery = require('jquery');
var bootstrap = require('bootstrap');

// Angular instance
var angular = require('angular');

// App instance
var app = angular.module('app', [
	// Angular includes
	require('angular-resource'),
	require('angular-animate'),
	require('angular-touch'),
	// 3rd party includes
	require('angular-ui-router'),
	require('angular-ui-bootstrap'),
	require('angular-chart.js')
]);

// App includes
require('./controller');
require('./service');
require('./directive');

// App resource provider
app.config(['$resourceProvider', function($resourceProvider) {
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);

// App configuration
app.constant('config', {
	rest_url: 'http://harha.us.to:9090',
	serv_url: 'http://harha.us.to:9091',
	chart_max_values: 32
});

// App routes
app.config(function($stateProvider, $urlRouterProvider) {

	//$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'view/main.html'
		})
		.state('opcua_settings', {
			url: '/opcua_settings',
			templateUrl: 'view/opcua_settings.html'
		})
		.state('opcua_server', {
			url: '/opcua_server/:serverId',
			templateUrl: 'view/opcua_server.html'
		});
});