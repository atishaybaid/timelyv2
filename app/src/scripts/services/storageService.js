define([],function(){

function storageService() {
	
	this.saveToStorage  = function(key,value){
		window.localStorage.setItem(key,value);
	};
	this.retriveFrmStorage = function(key){
	return window.localStorage.getItem(key);
	}
};

    return storageService;
    
});