$(document).ready(function(){
	$("#navigation > li > ul").hide().removeClass("active");
	$("#navigation > li").hover(function(){
		$(this).children("ul").slideDown(150);
		$(this).addClass("active");
	}, function() {
		$(this).children("ul").slideUp(100);
		$(this).removeClass("active");
	});
});