/*global modc,myApp*/
    modc.controller('HitController', ['$scope',
        function ($scope) {
            'use strict';
            $scope.hits =
            {
                hitCounter : 0,
                hitCounterEven : 0
            };

            $scope.upVoteSession = function (hit) {
                hit.hitCounter++;
                hit.hitCounterEven+=2;
            };
            $scope.downVoteSession = function (hit) {
                hit.hitCounter--;
                hit.hitCounterEven-=2;
            };
        }
    ]
);