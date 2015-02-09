timelyv2App.config(['$routeProvider',
    function(routeProvider) {
        routeProvider.
            when('/home', {
                templateUrl: 'scripts/views/home.html',
                controller: 'mainController'
            }).
            otherwise({
                redirectTo:'/home'
            });
    }
]);