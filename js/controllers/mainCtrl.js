timelyv2App.controller("mainCtrl",function($scope,$timeout){
	
	$scope.date = {};

	var updateTime = function(){

		$scope.date.currentTime = new Date();
		$timeout(updateTime,1000);

	};

	updateTime();
});
