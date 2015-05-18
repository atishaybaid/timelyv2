(function() {
    'use strict';
    TimelyApp.controller("mainController", function($scope, $timeout, loadQuotationsService, weather,toDoService,focusService){
        $scope.date={} ;
        $scope.quote;
        $scope.temperature;
        $scope.displayFocusInputBox;
       /* $scope.focus="abbc";*/

        $scope.newTask ="";
        $scope.taskList = [];

        
        $scope.addTask = function(){

            if(event.keyCode === 13){


            toDoService.addTask($scope.newTask);
            $scope.taskList = toDoService.retriveFromStorage();
            $scope.newTask = '';
            }
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

        $scope.editTask = function(task){
            if (event.keyCode === 13) {
                toDoService.editTask(task);
                 $scope.taskList = toDoService.retriveFromStorage();
            }

        }; 

    
            
            $scope.taskList = toDoService.retriveFromStorage();
            
        $scope.createFocus = function(){

            var chkIfNew = focusService.chkIfNew();
            $scope.displayFocusInputBox = !chkIfNew;
             if (event.keyCode === 13) {
                console.log($scope.focus);
                console.log("at event listner");
                focusService.saveNewFocus($scope.focus);
             }

             console.log(chkIfNew);

             if(chkIfNew == true){
                $scope.displayFocus =chkIfNew;
                var todaysFocusObj = focusService.previousFocus();
                $scope.todaysFocus = todaysFocusObj.focus;
                console.log($scope.todaysFocus);

             };


            

        };

    

        angular.element(document).ready(function() {
            updateTime();
            getQuatation();
            getTemperature();
            $scope.createFocus();
    
        })
    });
}());