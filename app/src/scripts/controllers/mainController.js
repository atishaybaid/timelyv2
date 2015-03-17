(function() {
    'use strict';
    TimelyApp.controller("mainController", ['$scope', '$timeout','loadQuotationsService',
        function($scope, $timeout, loadQuotationsService) {
           
            $scope.quote = loadQuotationsService.todaysQuote();

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
    ]);
}());