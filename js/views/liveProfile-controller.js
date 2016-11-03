starterCtrls
  .controller('LiveProfileController',['$scope','$state','$stateParams','$http', '$ionicHistory', '$ionicPopup', '$timeout', function ($scope, $state, $stateParams, $http, $ionicHistory, $ionicPopup, $timeout) {
		/*获取数据*/
		$http.get('mock/home_list.json')
			.then(
				function(res) {
					$scope.item = res.data[0];
//					console.log($scope.item);
				}
			);
		$scope.baoming="报名看直播";
		$scope.showAlert = function() {
			if($scope.baoming == "进入直播间"){
				$state.go("live");
				return false;
			}
			$scope.data = {}

	   	// 一个精心制作的自定义弹窗
	   	var myPopup = $ionicPopup.show({
	     
	    	title: '<i class="icon iconfont">&#xe65f;</i>',
	     	subTitle: '报名成功，开播会准时通知您哦',
	     	scope: $scope,
	     	buttons: []
	   	});
	   	myPopup.then(function(res) {
	     	$scope.baoming="进入直播间";
	   	});
	   	$timeout(function() {
	      myPopup.close(); //由于某种原因3秒后关闭弹出
	   	}, 3000);	
	 	};
		
//  console.log($stateParams);
		/*跳转上一页*/
    $scope.dBack=function(){
    	
    } 
    /*跳转下一页*/
    $scope.detailGoTo = function(){
  		
    }
    /*判断活动或专家*/
    $scope.speaker = true;
    /*直播专家信息显示*/
    $scope.cardShow = false;
    $scope.mesShow = function(){
    	$scope.cardShow = true;
    }
    $scope.mesHide = function(){
   		$scope.cardShow = false;
    }
    
			
  }]);
