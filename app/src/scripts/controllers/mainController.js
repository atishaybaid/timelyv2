define([],function(){

    function mainController($scope, $timeout, loadQuotationsService, weather,toDoService,focusService){
        $scope.date={} ;
        $scope.quote;
        $scope.temperature;
        $scope.displayFocusInputBox;
       /* $scope.focus="abbc";*/

        $scope.newTask ="";
        $scope.taskList = [];
                                 
        //changingng background randomly

        var changeBackground = function(){
            var bckArray = ['cl.jpg','co.jpg','dc.jpg','hk.jpg','na.jpg','niv.jpg','pf,jpg','sr.jpg','nl.jpg','vf.jpg','yr.jpg'];
            var bodyElement = document.getElementsByTagName('body')[0];
            bodyElement.style.backgroundImage="url(../src/images/"+bckArray[Math.floor(Math.random()*bckArray.length)]+")";
        };    

        
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
            changeBackground();
    
        })
    };
    
    mainController.$inject=['$scope', '$timeout','loadQuotationsService','weather','toDoService','focusService'];
    return mainController;

});