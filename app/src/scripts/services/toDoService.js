TimelyApp.service("toDoService", function() {
    var newTask = {};
    var taskList = [];
    var Task = function(newTaskName) {
        this.taskName = newTaskName;
        this.isCompleated = 'false';
    };
    this.addTask = function(newTaskName) {
        if (event.keyCode === 13) {
            taskList = this.retriveFromStorage();
            var newTask = new Task(newTaskName);
            taskList.push(newTask);
            this.storeToLocalStorage(taskList)
        };
    };
    this.storeToLocalStorage = function(taskList) {
        var key = 'taskList';
        window.localStorage.setItem(key, angular.toJson(taskList));
    };
    this.retriveFromStorage = function(){
    	console.log("inside retriveFromStorage");
    	var stringArray = window.localStorage.getItem('taskList');
    	taskList = angular.fromJson(stringArray);

        if(taskList === null){
            taskList = [];
        }

    	console.log(taskList);
        return taskList;
    };

});