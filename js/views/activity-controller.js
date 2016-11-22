starterCtrls
  .controller('ActivityController', ['$scope', '$http', '$state', function ($scope, $http, $state) {

  }])
  .controller('lastestActCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
 		/*活动页数据*/
    $scope.latestActivities = []; 
		/*获取数据*/
    $http.get('mock/activity.json')
		.then(
			function(res) {
				$scope.activities = res.data;
				$scope.activitiesLength = $scope.activities.length;
				for(var i=0;i<$scope.activitiesLength;i++){
					if($scope.activities[i].info != "已结束"){
						$scope.latestActivities.push($scope.activities[i]);							
					}
				}
			}
		);
 	}])
  .controller('pastActCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
 		/*活动页数据*/
    $scope.pastActivities = [];
		/*获取数据*/
    $http.get('mock/activity.json')
		.then(
			function(res) {
				$scope.activities = res.data;
				$scope.activitiesLength = $scope.activities.length;
				for(var i=0;i<$scope.activitiesLength;i++){
					if($scope.activities[i].info == "已结束"){
						$scope.pastActivities.push($scope.activities[i]);
					}
				}
			}
		);
 	}])
  
