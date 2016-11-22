angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
  	//配置tabs路由
    .state('tabs', {
      url: '/tab',
      cache: false,
      templateUrl: './tpls/tabs.html',
      controller: 'TabsController'
    })
  	//配置首页的路由
    .state('tabs.home', {
      url: '/home',
      cache: false,
      views: {
        'home-tab': {
          templateUrl: './tpls/tab-home.html',
          controller: 'HomeController'
        }
      }
    })
  	//配置首页-看大会的路由    
    .state('tabs.home.watch', {
    	url:'/watch',
    	cache: false,
    	params: {
    		'idLearn':null,
    		'nav':null,
    		'position':null
    	},
    	views: {
    		'watch-home': {
    			templateUrl: './tpls/home/watch-home.html'
    		}
    	}
    })
  	//配置首页-学知识的路由    
    .state('tabs.home.learn', {
    	url:'/learn',
    	cache: false,
    	params: {
    		'idLearn':-1,
    		'nav':null,
    		'position':null
    	},
    	views: {
    		'learn-home': {
    			templateUrl: './tpls/home/learn-home.html'
    		}
    	}
    })
  	//配置首页-大咖说的路由    
    .state('tabs.home.say', {
    	url:'/say',
    	cache: false,
    	params: {
    		'nav':null,
    		'position':null
    	},
    	views: {
    		'say-home': {
    			templateUrl: './tpls/home/say-home.html'
    		}
    	}
    })
    //配置'活动页面'的路由
    .state('tabs.activity', {
      url: '/activity',
      cache: false,
      views: {
        'activity-tab': {
          templateUrl: './tpls/tab-activity.html',
          controller: 'ActivityController'
        }
      }
    })
    //配置'活动->最新活动'的路由
    .state('tabs.activity.lastest', {
      url: '/lastest',
      cache: false,
      views: {
        'lastestAct': {
          templateUrl: './tpls/activity/lastestAct.html',
        }
      }
    })
    //配置'活动->往期活动'的路由
    .state('tabs.activity.past', {
      url: '/past',
      cache: false,
      views: {
        'pastAct': {
          templateUrl: './tpls/activity/pastAct.html',
        }
      }
    })
    //配置'我的页面'的路由
    .state('tabs.my', {
      url: '/my',
      cache: false,
      	views: {
	        'my-tab': {
	          templateUrl: './tpls/tab-my.html',
	          controller: 'MyController'
	        }
	      }
    })
    //配置'我的页面->我的视频'的路由
    .state('tabs.my.myVedio', {
      url: '/myVedio',
      cache: false,
      	views: {
	        'myVedio-my': {
	          templateUrl: './tpls/my/myVedio.html',
	        }
	      }
    })
    //配置'我的页面->我看过的'的路由
    .state('tabs.my.myLooked', {
      url: '/myLooked',
      cache: false,
      	views: {
	        'myLooked-my': {
	          templateUrl: './tpls/my/myLooked.html',
	        }
	      }
    })
    //配置'详情页'的路由
    .state('detail', {
      url: '/tab/:view/:detailId',
      //url: '/tab/:homeId',
      params:{
      	'detailId': null,
      	'view': null,
      	'playId': null,
      	'view2': null
      },
      cache: false,
      templateUrl: './tpls/detail.html',
      controller: 'DetailController'
    })
    //配置'播放页面'的路由
    .state('play', {
      url: '/:view/:view2/play/:playId/:myId/:homeId',
      cache: false,
      params: {
      	'playId': null,
      	'detailId': null,
    		'view': null,
    		'view2': null,
    		'myId': null,
    		'homeId':null
    	},
      templateUrl: './tpls/play.html',
      controller: 'PlayController'
    })
    //配置'登录注册'的路由
		.state('login_register', {
      url: '/:view/login_register',
      cache: false,
      params: {
      	'view': null
    	},
      templateUrl: './tpls/login_register.html',
      controller: 'LoginRegisterController'
    })
		//配置'分类页面'的路由
    .state('classify', {
      url: '/classify',
      cache: false,
      abstract:true,
      templateUrl: './tpls/classify/classify.html',
      controller: 'ClassifyController'
    })
    //配置'分类页面/看大会页面'的路由
    .state('classify.watch', {
    	url:'/watch',
    	cache: false,
     	views: {
        'watch-classify': {
          templateUrl: 'tpls/classify/watch-classify.html'
        }
      }
    })
    //配置'分类页面/学知识页面'的路由
    .state('classify.learn', {
    	url:'/learn',
    	cache: false,
    	views: {
        'learn-classify': {
          templateUrl: 'tpls/classify/learn-classify.html'
        }
      }
    })
  	//配置'分类页面/大咖说页面'的路由
    .state('classify.say', {
    	url:'/say',
    	cache: false,
    	views: {
        'say-classify': {
          templateUrl: 'tpls/classify/say-classify.html'
        }
      }
    })
    //配置直播的路由
  	.state('live', {
  		url: "/:view/:nav/:position/:view2/live/:liveId",
  		cache: false,
  		params:{
  			'liveId': null,
  			'playId': null,
  			'detailId': null,
  			'view': null,
  			'view2': null,
  			'info': null,
  			'nav': null,
  			'position': null
  		},
  		templateUrl: './tpls/live.html',
  		controller: 'LiveController'
  	})
    //配置直播简介页的路由
  	.state('liveprofile', {
  		url: "/:view/:nav/:position/liveprofile/:liveprofileId/:liveId",
  		cache: false,
  		params:{
  			'liveprofileId': null,
  			'liveId': null,
  			'playId': null,
  			'detailId': null,
  			'view': null,
  			'info': null,
  			'nav': null,
  			'position': null
  		},
  		templateUrl: './tpls/live/live_profile.html',
  		controller: 'LiveProfileController'
  	});
    $urlRouterProvider.otherwise('/tab/home');
});