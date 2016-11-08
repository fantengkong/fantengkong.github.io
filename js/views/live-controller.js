starterCtrls
  .controller('LiveController',['$scope', '$http', '$ionicScrollDelegate', '$ionicHistory', '$state', '$stateParams', '$timeout',function ($scope, $http, $ionicScrollDelegate, $ionicHistory, $state, $stateParams, $timeout) {
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
		/*返回按钮*/
    $scope.liveBack = function(){
    	if($stateParams.view&&$stateParams.detailId>=0){
    		$state.go($stateParams.view,{detailId: $stateParams.detailId, view: 'tabs.activity'});
    	}else{
    		$state.go('tabs.home');
    	}
    } 
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
  }]);
