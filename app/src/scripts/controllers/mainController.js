(function () {
    'use strict';

    TimelyApp.controller("mainController", ['$scope','$timeout',function ($scope, $timeout) {

        $scope.date = {};

        var updateTime = function () {

            $scope.date.currentTime = new Date();
            $timeout(updateTime, 1000);

        };

        updateTime();


        //Season Service

        /*seasonService.getAll();
        var giveSeason = function(){
        	var date = new Date().getMonth();
        	if(date>=2 && date<=3){
        		return 'Spring';
        	}
        	else if(date>=4 && date<=6){
        		return 'Summer';
        	}
        	else if(date>=7 && date<=10){
        		return 'Rainy';
        	}
        	else if((date>=10 && date<=12) || (date === 1)){
        		return 'Winter';
        	}
        };

        $('body').css({'background-image':'url(\'images/'+giveSeason()+'.jpg\')'});*/
    }]);
}());