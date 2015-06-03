define(['scripts/routes','scripts/services/focusService','scripts/services/loadQuotationsService','scripts/services/storageService','scripts/services/temperatureProvider','scripts/services/toDoService','scripts/directives/youTubeDirective','scripts/controllers/mainController'],function(config,focusService,loadQuotationsService,storageService,weather,toDoService,youTubeDirective,mainController){

    var TimelyApp = angular.module('TimelyApp', ['ngRoute']);
    
    TimelyApp.config(config);
    TimelyApp.service('focusService',focusService);
    TimelyApp.service('loadQuotationsService',loadQuotationsService);
    TimelyApp.service('storageService',storageService);
    TimelyApp.service('weather',weather);
    TimelyApp.service('toDoService',toDoService);
    TimelyApp.directive('youtube',youTubeDirective);
    TimelyApp.controller('mainController',mainController);

   

});
