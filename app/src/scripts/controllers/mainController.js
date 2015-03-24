(function() {
    'use strict';
    TimelyApp.controller("mainController", function($scope, $timeout, loadQuotationsService, weather,toDoService) {
        $scope.date={} ;
        $scope.quote;
        $scope.temperature;

        $scope.newTask ="";

        toDoService.retriveFromStorage();
        $scope.addTask = function(){

            toDoService.addTask($scope.newTask);
        };
        

        var getTemperature = function() {
            var promise = weather.Temperature();
            promise.then(function(data) {
                $scope.temperature = data;
            }, function(err) {
                console.log(err);
            });
        };
        var getQuatation = function() {
            $scope.quote = loadQuotationsService.todaysQuote();           
        };
       
        var updateTime = function() {
                $scope.date.currentTime = new Date();
                $timeout(updateTime, 1000);
        };

        angular.element(document).ready(function() {
            updateTime();
            getQuatation();
            getTemperature();
        })
    });
}());