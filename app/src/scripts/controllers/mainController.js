(function () {
    'use strict';

    TimelyApp.controller("mainController", function ($scope, $timeout) {

        $scope.date = {};

        var updateTime = function () {

            $scope.date.currentTime = new Date();
            $timeout(updateTime, 1000);

        };

        updateTime();
    });
}());