(function() {
    'use strict';
    TimelyApp.controller("mainController",function($scope,$timeout,loadQuotationsService,weather) {
           
            console.log(weather);

            $scope.quote = loadQuotationsService.todaysQuote();

            //weather.getUrl();

            $scope.date = {};
            var updateTime = function() {
                $scope.date.currentTime = new Date();
                $timeout(updateTime, 1000);
            };

            

        /*chrome.history.search({text:"www.wwe.com"},function(historyItems){
            console.log(parseInt(historyItems[0].lastVisitTime));
        });*/

            updateTime();
               

          

        }
    );
}());