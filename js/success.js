$(function(){
	var count=localStorage.getItem("count");
	$("#phone").text(localStorage.getItem("phone"+count));

	$("section .aler ul li:first-child").addClass("on");
	$(".login").show();
	$("section .aler ul li").each(function(index){
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$("section .aler .wrap div").hide().eq(index).show();
		})
	})

	$("#btn-login").click(function(){
		$("section .back").show();
		$("section .aler").show();
	})
	$("section .back").click(function(){
		$("section .back").hide();
		$("section .aler").hide();
	})

	
	$("#login-btn").click(function(){
		var count=localStorage.count;
		for(var i=1;i<=count;i++){
			var phone=localStorage.getItem("phone"+i);
			var pwd=localStorage.getItem("pwd"+i);
			if(($(".login #phone").val()==phone)&&($(".login #pwd").val()==pwd)){
				$("#login-btn").submit();
			}else{
				$("section .aler .login form .error").show();
				return false;
			}
		}
	})
})