starterCtrls
  .controller('LoginRegisterController', ['$scope','$state','$timeout', '$stateParams', function ($scope,$state,$timeout,$stateParams) {
    $scope.haslogin = function(){
    	sessionStorage.setItem("login", "false");
    	$state.go("tabs.my");
    	$scope.isFlag = false;
    	sessionStorage.setItem("weixin","true");
    	
    }  
    $scope.weixin_back = function(){
    	$state.go($stateParams.view);
    }
    /*<!-- "access_token": "8z9NCbPqubGp_2AZa0ivxjPxKw74k-w3cVcHxB4d7evocB3wllMnQ62WcHnirmOwGqWvuYE6GmhwKyPJpAqup_C2_DIDyk-IekPMUVtwGLg5wI8L1ifmTll4XW-EUZOuIDUaAFAVQH", 
    "expires_in": 7200-->
<!--{"errcode":0,"errmsg":"ok","ticket":"kgt8ON7yVITDhtdwci0qeWVGYdpowiWYC6I7xvuk8qvWF15_OrXNSBEPbhIiWCpfOOiVgtVJmC4IPzSZFA6NJg","expires_in":7200}-->    
    <!--jsapi_ticket=kgt8ON7yVITDhtdwci0qeWVGYdpowiWYC6I7xvuk8qvWF15_OrXNSBEPbhIiWCpfOOiVgtVJmC4IPzSZFA6NJg&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=tjtest.duapp.com
signature:6ede1db06c2c6f2d821ba88b56e47d3a645f17bb-->
    8z9NCbPqubGp_2AZa0ivxjPxKw74k-w3cVcHxB4d7evocB3wllMnQ62WcHnirmOwGqWvuYE6GmhwKyPJpAqup_&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=http://tjtest.duapp.com/
    */
   wx.config({
	    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	    appId: 'wxd4d142d5e8133e6c', // 必填，公众号的唯一标识
	    timestamp: 1414587457, // 必填，生成签名的时间戳
	    nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
	    signature: 'b7c599c9a555d0e77921471a5691f749ce5e0e9f',// 必填，签名，见附录1
	    jsApiList: [
	    			'checkJsApi',
            'openLocation',
            'getLocation',
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
		wx.ready(function () {
		});
		$scope.dd=function(){
				wx.ready(function () {
					wx.onMenuShareAppMessage({
			    title: 'ddd', // 分享标题
			    desc: 'ddd', // 分享描述
			    link: 'http://tjtest.duapp.com/', // 分享链接
			    imgUrl: '', // 分享图标
			    type: '', // 分享类型,music、video或link，不填默认为link
			    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			        alert('分享成功');
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    }
				});
        
        wx.error(function(res){
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
           console.log("errorMSG:"+res);
        });
    });
			
		}
	   	
   
  }]);
