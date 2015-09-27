(function(){
	jQuery(document).ready(function($){
		var minht = document.body.clientHeight-$('header').height()-$('footer').height();
		
		var navShowed = 0;//判断nav是否展开,默认为关 0
		
		initSize();
		
		$("header").click(function(){
			showhideNav("click");
		});
		
		$(window).resize(function(){
			minht = document.body.clientHeight-$('header').height()-$('footer').height();
			initSize();
			showhideNav();
		});
		
		function showhideNav(cc) {
			if((cc=="click") && (!navShowed) && ($("aside").is(':hidden'))){						
				$("aside").css("height",200+"px");
				$("aside").slideDown(600,function(){
					navShowed = 1;
				});
				$("header").css("background-color","#C38186");
			}else if(navShowed){
				var time = (cc=="click")?300:0;
				$("aside").slideUp(time,"linear",function(){
					navShowed = 0;
					$("header").css("background-color","darkgray");
					var h = $('article').height();
					$('aside').removeAttr("style");
					$('aside').height(h);
				});
				
			}
		}
				
		//ajax填充了article内的内容后，仍需重新对aside进行设置高度的操作，注意
		function initSize(){
			$('article').css("min-height",minht+"px");
			$('aside').height($('article').height());
		}
		
		lightbox.init();

	});
})();
