/**
 * Created by vedan_000 on 21-05-2014.
 */
/*global modc, myApp */
    modc.controller('ReaderController',['$scope', 'jsonData',
    function ($scope, jsonData) {
        'use strict';
        $scope.read = jsonData.getFile();
    }
        ]
);