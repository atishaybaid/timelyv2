TimelyApp.service("toDoService", function() {
    var newTask = {};
    var taskList = [];
    var Task = function(newTaskName) {
        this.taskName = newTaskName;
        this.isCompleated = 'false';
    };
    this.addTask = function(newTaskName) {
        if (event.keyCode === 13) {
            var newTask = new Task(newTaskName);
            this.storeToLocalStorage(newTask);
        };
    };
    this.storeToLocalStorage = function(newTask) {
        var key = 'newTask';
        window.localStorage.setItem(key, angular.toJson(newTask));
    };
});