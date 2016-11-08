starterCtrls
  .controller('LiveController',['$scope', '$http', '$ionicScrollDelegate', '$ionicHistory', '$state', '$stateParams', '$timeout',function ($scope, $http, $ionicScrollDelegate, $ionicHistory, $state, $stateParams, $timeout) {
    
    console.log($stateParams)
    $scope.params = $stateParams;
    /*获取直播间数据*/
		$http.get('mock/home/home_list.json')
		.then(
			function(res) {
				if($scope.params.id>=0){
					$scope.item = res.data[$scope.params.id];
				}else{
					$scope.item = res.data[0];
				}
			}
		);
		
		/*返回*/
    $scope.liveBack = function(){
    	$state.go($scope.params.view2,{detailId: $scope.params.liveId, liveId: $scope.params.liveId, liveprofileId: $scope.params.liveId, view: $scope.params.view});
    } 
		
    /*发送聊天*/
    $scope.sendChat = function(){
  		var oDiv=document.createElement('div');
			oDiv.style='clear:both';
			var $Ul=$(".l_chat");
			console.log($Ul);
			var $Li=$("ul li.msgContent:last").clone();
			
			$Li.html("<p><b class='l_right'></b>"+$scope.Chat+"</p><img src='../img/ben.png'/>");
			if($scope.Chat.length>0){
				$Li.appendTo($Ul);
				$ionicScrollDelegate.$getByHandle('liveScroll').scrollBottom();
				$scope.Chat="";
			}
    }
    /*点赞*/
    $scope.isActived = false;
    $scope.zan = 1234; 
    $scope.liveGood = function(){
    	if($scope.isActived == true){
    		return false;
    	}else{
    		$scope.isActived = true;
    		$scope.zan++;
    	}
    	
    	
    }
    
//  $scope.liveBack = function(){
//  	$ionicHistory.backView();
//  } 

//		console.log($stateParams)
		
   	$scope.commentsOpen = true;
    $scope.commentsClose = false;
    $scope.liveOver = false;
    $timeout(function(){
    	$scope.commentsOpen = false;
	    $scope.commentsClose = true;
    	$scope.liveOver = true;
    },3000);
    /*判断专家或活动*/
   $scope.isExpert = true;
   /*进入探基微信公众号*/
   $scope.goToTJweixin = function(){
   	$state.go("login_register");
   }
  }]);
