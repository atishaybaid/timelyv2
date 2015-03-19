TimelyApp.service("weather", function ($http) {
    this.apiKey = "9b702ccc56f4da90";
    
    

    this.getUrl = function(){
        var url = "http://api.wunderground.com/api/"
                    + this.apiKey +"/conditions/autoip.json";
        return url;

    };

    this.Temperature = function(){

        var url = this.getUrl();

        $http.get(url).
            success(function(data){
                console.log(data);
            }).
            error(function(data){
                console.log(data);
            })
        
    };

});
