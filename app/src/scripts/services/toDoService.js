TimelyApp.service("toDoService", function() {
    var newTask = {};
    var taskList = [];
    var Task = function(newTaskName,taskKey) {
        this.taskName = newTaskName;
        this.isCompleated = 'false';
        this.editing = 'false';
        this.taskKey = taskKey;
    };
    this.addTask = function(newTaskName) {
        if (event.keyCode === 13) {
            taskList = this.retriveFromStorage();
            var date = new Date();
            var taskKey = date.getTime().toString();;
            var newTask = new Task(newTaskName,taskKey);
            taskList.push(newTask);
            this.storeToLocalStorage(taskList);
        };
    };
    this.storeToLocalStorage = function(taskList) {
        var key = 'taskList';
        console.log("inside storeto");
        console.log(taskList);
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

    this.editTask = function(task){ 
        console.log("inside edit");   
        taskList = this.retriveFromStorage();

        for(var i=0;i<taskList.length;i++){
            console.log(task.taskKey);
            console.log(taskList[i].taskKey);
            if(task.taskKey === taskList[i].taskKey){
                console.log("inside if");
                taskList[i].taskName = task.taskName;
                taskList[i].editing = 'false';
                break;
            }

        };
        this.storeToLocalStorage(taskList);



    };

});