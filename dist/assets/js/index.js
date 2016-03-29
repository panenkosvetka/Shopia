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

$(function(){
	$('#opener').on('click', function () {
		 $('#nav').toggleClass('open')
	})
});

$(function() {
	$('select').styler();
});

$(document).ready(function() { 
	$(window).scroll(function() {
	if ($(this).scrollTop() >= $('.block-gallery').height()) {
		$('#toTop').addClass('open');
		}
	if ($(this).scrollTop() <= $('.block-gallery').height()) {
		$('#toTop').removeClass('open');
		}
	});
});


