/**
 * Created by vedan_000 on 04-06-2014.
 */
/*global modc, myApp */
modc.controller('RnCController',['$scope',
        function ($scope) {
            'use strict';
            $scope.columns = 0;
            $scope.rows = 0;

            $scope.populateGrid = function(){
                $scope.cols = [];
                $scope.ros = [];
                for (var i = 1; i <= $scope.columns; i++)
                    $scope.cols.push(i);
                for (var i = 1; i <= $scope.rows; i++)
                    $scope.ros.push(i);
            }
        }
    ]
);