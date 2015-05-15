TimelyApp.service("focusService", function(storageService) {
    var key = 'focus';
    this.previousFocus = function() {
        var focusObj = angular.fromJson(storageService.retriveFrmStorage(key));
        return focusObj;
    };
    this.saveNewFocus = function(focus){
    	var date = new Date();

    	var newFocusObj = {focus:focus,createdDate:date.getDate().toString()};
    	storageService.saveToStorage(key,angular.toJson(newFocusObj));


    };
    this.chkIfNew = function(){
    	var date = new Date();
    	var todaysDate = date.getDate();
    	var focusObj = previousFocus();
    	if(focusObj.createdDate == todaysDate ){
    		return true;
    	} else{
    		return false;
    	}

    }


});