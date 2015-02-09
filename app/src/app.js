var timelyv2App = angular.module("timelyv2App", ['ngRoute']);
timelyv2App.config(['$routeProvider',
    function(routeProvider) {
        routeProvider.
        when('/home', {
            templateUrl: 'js/views/home.html',
            controller: 'mainCtrl'
        }).
        otherwise({
        	redirectTo:'/home'
        });
    }
]);