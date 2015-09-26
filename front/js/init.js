(function(){
	jQuery(document).ready(function($){
		var minht = document.body.clientHeight-$('header').height()-$('footer').height();
		initSize();
		$(window).resize(function(){
			minht = document.body.clientHeight-$('header').height()-$('footer').height();
			initSize();
		});
		function initSize(){
			$('article').css("min-height",minht+"px");
			$('aside').height($('article').height());
		}

	});
})();
