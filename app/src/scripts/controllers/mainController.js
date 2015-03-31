(function() {
    'use strict';
    TimelyApp.controller("mainController", function($scope, $timeout, loadQuotationsService, weather,toDoService) {
        $scope.date={} ;
        $scope.quote;
        $scope.temperature;

        $scope.newTask ="";
        $scope.taskList = [];

        
        $scope.addTask = function(){

            toDoService.addTask($scope.newTask);
            $scope.taskList = toDoService.retriveFromStorage();

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

    
            
            $scope.taskList = toDoService.retriveFromStorage();

    

        angular.element(document).ready(function() {
            updateTime();
            getQuatation();
            getTemperature();
            //displayTask();
        })
    });
}());