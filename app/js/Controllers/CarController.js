/**
 * Created by vedan_000 on 24-05-2014.
 */
/*global modc, myApp*/
    modc.controller('CarController', ['$scope',
        function ($scope) {
            'use strict';
            $scope.cars = [
                {
                    "company": "Lamborgini",
                    "model" : "Gallardo",
                    "url":"http://pictures.topspeed.com/IMG/crop/201309/2014-lamborghini-gallardo-11_800x0w.jpg"
                },
                {
                    "company": "Lamborgini",
                    "model" : "Reventon",
                    "url":"http://pictures.topspeed.com/IMG/crop/200909/2010-lamborghini-reventon-2_800x0w.jpg"
                },
                {
                    "company": "Lamborgini",
                    "model" : "Aventador",
                    "url":"http://cdn.lamborghini.com/content/models/aventador_lp700-4_roadster/gallery_2013/roadster_10.jpg"
                },
                {
                    "company": "Lamborgini",
                    "model" : "Murcielago",
                    "url":"http://pictures.topspeed.com/IMG/crop/201105/lamborghini-lp640-ba-2_800x0w.jpg"
                },
                {
                    "company": "Aston Martin",
                    "model" : "Db9",
                    "url":"http://cdn.astonmartin.com/sitefinity/q2-2014-redesign/_mje9502.jpg?sfvrsn=2"
                },
                {
                    "company": "Bugatti",
                    "model" : "Veyron",
                    "url":"http://media.caranddriver.com/images/12q2/452742/2013-bugatti-veyron-164-grand-sport-vitesse-photo-453889-s-520x318.jpg"
                },
                {
                    "company": "BMW",
                    "model" : "i8",
                    "url":"http://www.bmw.com/_common/shared/newvehicles/i/i8/2014/showroom/02_at_a_glance/bg-design-01.jpg"
                },
                {
                    "company": "BMW",
                    "model" : "Z4 Roadster",
                    "url":"http://www.autotribute.com/wp-content/uploads/2012/08/BMW-Zagato-Roadster-side-angle.jpg"
                },
                {
                    "company": "Koenigsegg",
                    "model" : "Agera r",
                    "url":"http://www.koenigsegg.com/wp-content/uploads/AgeraR_2013_start.jpg"
                }
            ];
            $scope.selected = null;

            $scope.selectCar = function(car){
                $scope.selected = car;
            };
        }
    ]
);