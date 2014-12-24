/**
 * Created by vedan_000 on 04-06-2014.
 */
modc.controller('ListBox2Controller', ['$scope',
        function ($scope) {
            'use strict';

            $scope.leftItems = [
                {
                    name: "Pune",
                    selected: false
                },
                {
                    name: "Mumbai",
                    selected: false
                },
                {
                    name: "Solapur",
                    selected: false
                },
                {
                    name: "Bangalore",
                    selected: false
                },
                {
                    name: "Sangli",
                    selected: false
                }
            ];

            $scope.rightItems = [
                {
                    name: "Goa",
                    selected: false
                },
                {
                    name: "Manali",
                    selected: false
                },
                {
                    name: "Nainital",
                    selected: false
                },
                {
                    name: "Coorg",
                    selected: false
                },
                {
                    name: "Mahabaleshwar",
                    selected: false
                }
            ];

            $scope.ToggleSelect = function (item, event) {
                item.selected = !(item.selected);

                if (item.selected == false) {
                    event.target.className = event.target.className.replace(' active', '');
                }
                else {
                    event.target.className += ' active';
                }
            };

            $scope.move = function (left) {
                var chosen = [];
                var from = left ? $scope.leftItems : $scope.rightItems;
                var to = left ? $scope.rightItems : $scope.leftItems;
                for (var i = 0; i < from.length; i++) {
                    if (from[i].selected) {
                        chosen.push(from[i]);
                    }
                }
                for (i = 0; i < chosen.length; i++) {
                    to.push(chosen[i]);
                    chosen[i].selected = false;
                    from.splice(from.indexOf(chosen[i]), 1);
                }
            };

            $scope.moveAll = function (from, to) {
                angular.forEach(from, function (item) {
                    to.push(item);
                });
                from.length = 0;
            };
        }
    ]
);