/**
 * Created by vedan_000 on 24-07-2014.
 */
/*global modc,myApp*/
modc.controller('ListBox3Controller', ['$scope',
        function ($scope) {
            'use strict';
            $scope.mainList = [
                {
                    name: "AngularJs",
                    selected: false
                },
                {
                    name: "JavaScript",
                    selected: false
                },
                {
                    name: "HTML5",
                    selected: false
                },
                {
                    name: "Semantic-UI",
                    selected: false
                },
                {
                    name: "Bootstrap",
                    selected: false
                }
            ];

            $scope.subLists = [
                {
                    head: "jQuery",
                    subListItems: [
                        {
                            name: "Date_Picker",
                            selected: false
                        },
                        {
                            name: "Type_Ahead",
                            selected: false
                        }
                    ]
                }
            ];

            $scope.ToggleSelect = function (item) {
                item.selected = !item.selected;
            };


            /**
             * @return {boolean}
             */

            $scope.addItem = function () {
                $scope.mainList.push({name: $scope.itemName, selected: false});
                $scope.itemName = '';
            };

            $scope.removeSelectedItems = function () {
                $scope.mainList=$scope.mainList.filter(function(elem){
                    return !elem.selected;
                });

                $scope.subLists.forEach(function(list){
                    list.subListItems = list.subListItems.filter(function(elem){
                        return !elem.selected;
                    });
                });
            };

            $scope.addSubList = function () {
                var ListHeaderLength   = $scope.ListHeader.length;

                if (ListHeaderLength !== 0) {
                    $scope.subLists.push({head: $scope.ListHeader, subListItems: []});
                    $scope.ListHeader = '';
                }
            };

            $scope.removeList = function (item) {
                var index = $scope.subLists.indexOf(item);
                $scope.subLists.splice(index, 1);
            }

        }
    ]
);