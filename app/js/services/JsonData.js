/*global myApp */
angular.module('myApp.services', ['ngResource'])
    .factory('jsonData', [ '$resource', function ($resource) {
    "use strict";
    return {
        getFile: function () {
            return $resource('../data/username.json').get({});
        }
    };
}]);