$(function(){
	$("footer span").click(function(){
		$("body,html").stop().animate({scrollTop:0},300);
	})
	$(".cons .right_").click(function(){
		$("body").css({"overflow":"hidden"});
		$(".cons .left_").hide();
		$(".cons .right_").show();
		$(".con").show();
		$(".cons").css({"right":"30%","box-shadow":"4px 0px 4px rgba(0,0,0,0.5)"});
	})
	$(".con,.cons .left_").click(function(){
		$("body").css({"overflow":"auto"});
		$(".cons .right_").hide();
		$(".cons .left_").show();
		$(".con").hide();
		$(".cons").css({"right":"100%","box-shadow":"4px 0px 4px rgba(0,0,0,0)"});
	})
})
