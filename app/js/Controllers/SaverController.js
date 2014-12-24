/**
 * Created by vedan_000 on 19-10-2014.
 */
/*global modc,myApp*/
modc.controller('SaverController', ['$scope',
        function ($scope) {
            'use strict';
            $scope.msg = "This is Jason saver";

            var obj = {
                name: 'Vedang',
                score: 100
            };

            $scope.saveObj = function () {
                localStorage.setItem("gameStorage", JSON.stringify(obj));
                $scope.obj.name="Saved..";
            };

            $scope.obj = obj;

            $scope.loadObj = function () {
                $scope.obj = JSON.parse(localStorage.getItem('gameStorage'));
            };
        }
    ]
);