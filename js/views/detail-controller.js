starterCtrls
  .controller('DetailController',['$scope','$state','$stateParams','$http', '$ionicHistory',function ($scope, $state, $stateParams, $http, $ionicHistory) {
    /*底部栏状态*/
    $scope.attend = true;
    $scope.close = false;
    $scope.begin_soon = false;
    
    console.log($stateParams);
		/*跳转上一页*/
    $scope.dBack=function(){
    	if($stateParams.view){
    		$state.go($stateParams.view);
    	}else{
    		$state.go("tabs.home");
    	}
    } 
    
    /*跳转到直播间*/
    $scope.goToLive = function(){
  		if($stateParams.view == "tabs.activity.lastest"){
  			$state.go('live',{liveId: $stateParams.detailId, view: $stateParams.view, view2: 'detail'});
  		}
    }
    /*跳转到播放页*/
    $scope.goToPlay = function(){
  		if($stateParams.view == "tabs.activity.past"){
  			$state.go('play',{playId: $stateParams.detailId, view: $stateParams.view, view2: 'detail'});
  		}
    }
    /*获取数据*/
    $http.get('mock/activity.json')
			.then(
				function(res) {
					$scope.item = res.data[$stateParams.detailId];
					if($scope.item.info=="已结束"){
						$scope.attend = false;
				    $scope.close = true;
				    $scope.begin_soon = false;
					}else if($scope.item.info=="直播中"){
						$scope.attend = true;
				    $scope.close = false;
				    $scope.begin_soon = false;
					}else{
						$scope.attend = false;
						$scope.close = true;
						$scope.begin_soon = true;
					}
				}
			);
			
  }]);