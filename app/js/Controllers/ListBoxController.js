/**
 * Created by vedan_000 on 04-06-2014.
 */
modc.controller('ListBoxController',['$scope',
        function ($scope) {
            'use strict';
            $scope.friends = ["Deep","Mayur","Amogh","Siddhant","Abhishek","Sujoy"];
            $scope.bestfriends = ["Vikrant","Aditya","Mayuresh","Atharva","Soham","Siddharth","Shrirang"];

            var selectedLeft = [];
            var selectedRight = [];
            $scope.ToggleSelect = function(left, item){
                var selected = left ? selectedLeft : selectedRight;
                var index = selected.indexOf(item);
                if(index > -1){
                    selected.splice(index,1);
                }
                else {
                    selected.push(item);
                }
            };

            /**
             * @return {boolean}
             */
            $scope.IsSelected = function (item) {
                return selectedLeft.indexOf(item)>-1 || selectedRight.indexOf(item)>-1;
            };

            $scope.move = function(leftToRight) {
                var from = leftToRight ?  $scope.friends : $scope.bestfriends;
                var to = leftToRight ?  $scope.bestfriends : $scope.friends;
                var selected = leftToRight ? selectedLeft : selectedRight;
                angular.forEach(selected, function (item) {
                    to.push(item);
                    from.splice(from.indexOf(item), 1);
                });
                selected.length=0;
            };

            $scope.moveAll = function(from, to) {
                angular.forEach(from, function(item) {
                    to.push(item);
                });
                from.length = 0;
            };
        }
    ]
);