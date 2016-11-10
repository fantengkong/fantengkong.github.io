starterCtrls
	.controller('HomeController', ['$state', '$scope', '$ionicScrollDelegate', '$http', '$timeout', function($state, $scope, $ionicScrollDelegate, $http, $timeout) {
		/*回到顶部*/
		$scope.scrollTop = function() {
			$ionicScrollDelegate.$getByHandle('h_content').scrollTop(true);
			$(".scrollToTop").hide();
		};
		/*回到顶部按钮显示消失*/
		$scope.getPos = function() {
			$scope.d_top = parseInt($ionicScrollDelegate.$getByHandle('h_content').getScrollPosition().top);
			if($scope.d_top > 10) {
				$(".scrollToTop").show();
			} else {
				$(".scrollToTop").hide();
			}
		}
		
		/*获取假数据*/	
		$scope.items1 = [];
		$scope.items2 = [];
		$scope.items3 = []; 
		$http.get('./mock/home/home_list.json')
			.then(
				function(res) {
					$scope.datas = res.data.slice(0,29);
					for(var i=0;i<$scope.datas.length;i++){
						if($scope.datas[i].data=="看大会"){
							$scope.items1.push($scope.datas[i]);	
						}else if($scope.datas[i].data=="学知识"){
							$scope.items2.push($scope.datas[i]);
						}else if($scope.datas[i].data=="大咖说"){
							$scope.items3.push($scope.datas[i]);
						}
					}
				}
				
			);	
		/*保存数据*/	
		$scope.items11=	$scope.items1;
		$scope.items22=	$scope.items2;
		$scope.items33=	$scope.items3;	
	}])
	.controller('home_learnCtrl', ['$state', '$scope', '$ionicScrollDelegate', '$http', '$timeout', function($state, $scope, $ionicScrollDelegate, $http, $timeout) {
		
		$scope.openLearnClassify = function(){
			$state.go("classify.learn",{},{reload:true});
		}

		if(!JSON.parse( localStorage.getItem("learn") )){
			$scope.navItems2 = [
				{id: 0,name: "学知识",selected: true},
				{id: 1,name: "基因组",selected: true}, 
				{id: 2,name: "癌症",selected: true}, 
				{id: 3,name: "单细胞",selected: true}
			];
		}else{
			$scope.navItems2=[];
			$scope.learn=JSON.parse( localStorage.getItem("learn") );
			for(var i=0;i<$scope.learn.length;i++){
				if($scope.learn[i].selected == true){
					$scope.navItems2.push($scope.learn[i]);
				}
			}
		}
		/*初始默认推荐按钮*/
		$scope.activeNavLearn = -1;
		$scope.isActive2 = true;
		/*点击看大会推荐*/
		$scope.learnRecommend = function(){
			$ionicScrollDelegate.$getByHandle('h_content').scrollTop(true);
			$scope.activeNavLearn = -1;
			$scope.isActive2 = true;
			$scope.num2 = 0;
    	$scope.learnDataLoad = true;
			//点击加载数据
    	$http.get('./mock/home/home_list.json')
			.then(
				function(res) {					
					$scope.items2=$scope.items22;
				}
			);
		}
		//点击二级导航按钮加载数据
		$scope.navLearn = function(index){
			$ionicScrollDelegate.$getByHandle('h_content').scrollTop(true);
    	$scope.activeNavLearn = index;
    	$scope.isActive2 = false;
    	$scope.num2 = 0;
    	$scope.learnDataLoad = true;
    	
    	//点击加载数据
    	$http.get('./mock/home/home_list.json')
			.then(
				function(res) {
					$scope.item2=$scope.items22[(index%10)].id;
					$scope.items2=[];
					$scope.items2.push(res.data[$scope.item2]);
				}
			);
		}
		/*上拉加载更多*/
			/*每次加载的行数*/
			$scope.num2 = 0;
			/*是否加载*/
			$scope.learnDataLoad = true;
		$scope.loadMore = function() {
			if(!$("ion-infinite-scroll i").html()){
				$("ion-infinite-scroll").prepend("<i>高能加载中</i>").css("color","#b0aba8");
			}
			$timeout(function(){
				$http.get('./mock/home_more-item.json').success(function(items) {
					/*总加载次数*/
					$scope.time = Math.ceil(items.length/10);
					if($scope.num2 == $scope.time){
							$("ion-infinite-scroll").html("没有更多加载了");
							$scope.loadMore = false;
						}
					$scope.items2 = $scope.items2.concat(items.slice( (0+$scope.num2*20) , (9+$scope.num2*20) ) );
					$scope.num2++;
					$scope.$broadcast('scroll.infiniteScrollComplete');
				})
			},1000)
			
				
		};
		$scope.$on('scroll.inifiteScrollComplete', function() {
			$scope.loadMore();
		});
		
	}])
	.controller('home_watchCtrl', ['$state', '$scope', '$ionicScrollDelegate', '$http', '$timeout', function($state, $scope, $ionicScrollDelegate, $http, $timeout) {
		$scope.watchDataLoad = false;
		
		/*打开看大会分类页*/
		$scope.openWatchClassify = function(){
			$state.go("classify.watch",{},{reload:true});
		}
		
		/*判断本地存储*/
		if(!JSON.parse( localStorage.getItem("watch") )){
			$scope.navItems1 = [
				{id: 0,name: "看大会",selected: true},
				{id: 1,name: "基因组",selected: true}, 
				{id: 2,name: "癌症",selected: true}, 
				{id: 3,name: "单细胞",selected: true}
			];
		}else{
			$scope.navItems1=[];
			$scope.watch=JSON.parse( localStorage.getItem("watch") );
			for(var i=0;i<$scope.watch.length;i++){
				if($scope.watch[i].selected == true){
					$scope.navItems1.push($scope.watch[i]);
				}
			}
		}
		
		/*初始默认推荐按钮*/
		$scope.activeNavWatch = -1;
		$scope.isActive1 = true;
		
		/*点击看大会推荐*/
		$scope.watchRecommend = function(){
			$ionicScrollDelegate.$getByHandle('h_content').scrollTop();
			$scope.activeNavWatch = -1;
			$scope.isActive1 = true;
    	$scope.num1 = 0;
    	$scope.watchDataLoad = true;
			//点击加载数据
    	$http.get('./mock/home/home_list.json')
			.then(
				function(res) {					
					$scope.items1=$scope.items11;
				}
			);
		}
		
		//点击二级导航按钮加载数据
		$scope.navWatch = function(index){
			$ionicScrollDelegate.$getByHandle('h_content').scrollTop();
    	$scope.activeNavWatch = index;
    	$scope.isActive1 = false;
    	$scope.num1 = 0;
    	//点击加载数据
    	$http.get('./mock/home/home_list.json')
			.then(
				function(res) {
					$scope.item1=$scope.items11[(index%10)].id;
					$scope.items1=[];
					$scope.items1.push(res.data[$scope.item1]);
				}
			);
		}
		
		/*上拉加载更多*/
		/*每次加载的行数*/
		$scope.num1 = 0;
		/*是否加载*/
		$scope.watchDataLoad = true;
		$scope.loadMore = function() {
			if(!$("ion-infinite-scroll i").html()){
				$("ion-infinite-scroll").prepend("<i>高能加载中</i>").css("color","#b0aba8");
			}
			$timeout(function(){
				$http.get('./mock/home_more-item.json').success(function(items) {
					/*总加载次数*/
					$scope.time = Math.ceil(items.length/10);
					if($scope.num1 == $scope.time){
						$("ion-infinite-scroll").html("没有更多加载了");
						$scope.loadMore = false;
					}
					$scope.items1 = $scope.items1.concat(items.slice( (0+$scope.num1*10) , (9+$scope.num1*10) ) );
					$scope.num1++;
					$scope.$broadcast('scroll.infiniteScrollComplete');
				})
			},1000)
				
		};
		$scope.$on('scroll.inifiteScrollComplete', function() {
			$scope.loadMore();
		});
	}])
	.controller('home_sayCtrl', ['$state', '$scope', '$ionicScrollDelegate', '$http', '$timeout', function($state, $scope, $ionicScrollDelegate, $http, $timeout) {
		
		$scope.openSayClassify = function(){
			$state.go("classify.say",{},{reload:true});
		}
		
		if(!JSON.parse( localStorage.getItem("say") )){
			$scope.navItems3 = [
				{id: 0,name: "大咖说",selected: true},
				{id: 1,name: "基因组",selected: true}, 
				{id: 2,name: "癌症",selected: true}, 
				{id: 3,name: "单细胞",selected: true}
			];
		}else{
			$scope.navItems3=[];
			$scope.say=JSON.parse( localStorage.getItem("say") );
			for(var i=0;i<$scope.say.length;i++){
				if($scope.say[i].selected == true){
					$scope.navItems3.push($scope.say[i]);
				}
			}
		}
		/*初始默认推荐按钮*/
		$scope.activeNavSay = -1;
		$scope.isActive3 = true;
		
		/*点击看大会推荐*/
		$scope.sayRecommend = function(){
			$scope.activeNavSay = -1;
			$scope.isActive3 = true;
    	$scope.num3 = 0;
    	$scope.sayDataLoad = true;
			//点击加载数据
    	$http.get('./mock/home/home_list.json')
			.then(
				function(res) {					
					$scope.items3=$scope.items33;
				}
			);
			$ionicScrollDelegate.$getByHandle('h_content').scrollTop(true);
		}
		//点击二级导航按钮加载数据
		$scope.navSay = function(index){
    	$scope.activeNavSay = index;
    	$scope.isActive3 = false;
    	$scope.num3 = 0;
    	$scope.sayDataLoad = true;
    	//点击加载数据
    	$http.get('./mock/home/home_list.json')
			.then(
				function(res) {
					$scope.item3=$scope.items33[(index%10)].id;
					$scope.items3=[];
					$scope.items3.push(res.data[$scope.item3]);
				}
			);
			$ionicScrollDelegate.$getByHandle('h_content').scrollTop(true);
		}
		/*上拉加载更多*/
			/*每次加载的行数*/
			$scope.num3 = 0;
			/*是否加载*/
			$scope.sayDataLoad = true;
		$scope.loadMore = function() {
			if(!$("ion-infinite-scroll i").html()){
				$("ion-infinite-scroll").prepend("<i>高能加载中</i>").css("color","#b0aba8");
			}
			$timeout(function(){
				$http.get('./mock/home_more-item.json').success(function(items) {
					/*总加载次数*/
					$scope.time = Math.ceil(items.length/10);
					if($scope.num3 == $scope.time){
						$("ion-infinite-scroll").html("没有更多加载了");
						$scope.loadMore = false;
					}
					$scope.items3 = $scope.items3.concat(items.slice( (0+$scope.num3*10) , (9+$scope.num3*10) ) );
					$scope.num3++;
					$scope.$broadcast('scroll.infiniteScrollComplete');
				})
			},1000)
				
		};
		$scope.$on('scroll.inifiteScrollComplete', function() {
			$scope.loadMore();
		});
	}]);
	