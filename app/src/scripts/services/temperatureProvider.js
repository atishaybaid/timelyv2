TimelyApp.provider("weather", function ($http) {
    var apiKey = "";
    
    this.setApiKey = function(key) {
      this.apiKey = key;
      		
    };

    this.getUrl = function(){
    	var url = "http://api.wunderground.com/api/"
    				+ this.apiKey +"/conditions/q/CA/San_Francisco.json";
    	return url;

    };

    this.$get = function(){

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
TimelyApp.config(["weatherProvider",
    function(weatherProvider) {
        weatherProvider.setApiKey("9b702ccc56f4da90");
    }
])

