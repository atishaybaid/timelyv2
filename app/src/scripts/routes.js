define([],function(){


function config($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'scripts/views/home.html',
                    controller: 'mainController'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        };
    
    config.$inject = ['$routeProvider'];
    
    return config;
    

    
});