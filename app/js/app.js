'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'myApp.directives',
    'myApp.controllers',
    'myApp.services',
    'myApp.filters',
    'btford.dragon-drop'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/RnC', {templateUrl: 'partials/RnC.html', controller: 'RnCController'});
    $routeProvider.when('/List Box', {templateUrl: 'partials/List Box.html', controller: 'ListBoxController'});
    $routeProvider.when('/List Box 2', {templateUrl: 'partials/List Box 2.html', controller: 'ListBox2Controller'});
    $routeProvider.when('/List Box 3', {templateUrl: 'partials/List Box 3.html', controller: 'ListBox3Controller'});
    $routeProvider.when('/Cars', {templateUrl: 'partials/Cars.html', controller: 'CarController'});
    $routeProvider.when('/Hit Counter', {templateUrl: 'partials/Hit Counter.html', controller: 'HitController'});
    $routeProvider.when('/RtD', {templateUrl: 'partials/ResponsiveToDevice.html'});
    $routeProvider.when('/Json file reader', {templateUrl: 'partials/Json file reader.html', controller: 'ReaderController'});
    $routeProvider.when('/Json file saver', {templateUrl: 'partials/Json file saver.html', controller: 'SaverController'});
    $routeProvider.otherwise({redirectTo: '/RnC'});
}]);


var modc = angular.module('myApp.controllers', []);