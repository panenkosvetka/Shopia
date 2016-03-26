jQuery(function($){
	$(window).on('load', function(){
		 $('.slider').bxSlider({
			mode: 'horizontal',
			captions: true,
			speed: 700,
			auto: false,
			controls: false,
			pagerSelector: '.pager'			
		});
	});
});	