// 로딩 페이지 js
// https://shanepark.tistory.com/148
$(function(){
    
	let loading = $('<div id="loading" class="loading"><img id="loading_img" alt="loading" src="/resources/images/loading/ajax-loader.gif" /></div>')
			.appendTo(document.body).hide();
	
	$(window).ajaxStart(function(){
		loading.show();
	}).ajaxStop(function(){
		loading.hide();
	});
});