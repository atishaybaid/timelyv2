define([],function(){

function weather($http, $q) {
    this.apiKey = "9b702ccc56f4da90";
    this.getUrl = function() {
        var url = "http://api.wunderground.com/api/" + this.apiKey + "/conditions/q/autoip.json";
        return url;
    };
    this.Temperature = function() {
        var url = this.getUrl();
        return $q(function(resolve, reject) {
            $http.get(url).
            success(function(data) {
                if (data) {
                    resolve(data.current_observation.temp_c);
                }
            }).
            error(function(data) {
                reject("some error occured");
            })
        });
    };
};
    weather.$inject =['$http','$q'];
    return weather;
    
    
});
    