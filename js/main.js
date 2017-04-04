$(function(){
	var ok1=false;
	var ok2=false;
	var ok3=false;
	var ok4=false;
	var ok5=false;
	$("#phone").blur(function() {
		var pattern=/^1\d{10}$/;
		var phone=$("#phone").val();
		if(pattern.test(phone)){
			var count=localStorage.count;
				for(var i=1;i<=count;i++){
					var phone=localStorage.getItem("phone"+i);
					if(phone==$("#phone").val()){
						$("#phonereError").show();
						$("#phone").addClass("foc");
						ok1=false;
					}
				}
			$("#phoneInfo").show();
			$("#phoneError").hide();
			$("#phonereError").hide();
			$("#phone").removeClass("foc");
			ok1=true;
		}else{
			$("#phoneError").show();
			$("#phone").addClass("foc");
			ok1=false;
		}
	});
	$("#pwd").blur(function(){
		var pattern=/^[a-zA-Z\d]{6,8}$/;
		var pwd=$("#pwd").val();
		if(pattern.test(pwd)){
			$("#pwdInfo").show();
			$("#pwdError").hide();
			$("#pwd").removeClass("foc");
			ok2=true;
		}else{
			$("#pwdError").show();
			$("#pwd").addClass("foc");
			ok2=false;
		}
	});
	$("#repwd").blur(function(){
		var pwd=$("#pwd").val();
		var repwd=$("#repwd").val();
		if(pwd==repwd){
			$("#repwdInfo").show();
			$("#repwdError").hide();
			$("#ale").hide();
			$("#repwd").removeClass("foc");
			ok3=true;
		}else{
			$("#repwdError").show();
			$("#ale").show();
			$("#repwd").addClass("foc");
			ok3=false;
		}
	});
	$("#email").blur(function(){
		var pattern=/^\w+@\w+(\.[a-z]{2,3}){1,2}$/;
		var email=$("#email").val();
		if(pattern.test(email)){
			$("#emailInfo").show();
			$("#emailError").hide();
			$("#email").removeClass("foc");
			ok4=true;
		}else{
			$("#emailError").show();
			$("#email").addClass("foc");
			ok4=false;
		}
	})
	$("#pic").blur(function(){
		var str="nodick";
		var pic=$("#pic").val();
		if(pic==str){
			$("#picInfo").show();
			$("#picError").hide();
			$("#pic").removeClass("foc");
			ok5=true;
		}else{
			$("#picError").show();
			$("#pic").addClass("foc");
			ok5=false;
		}
	})
	$("#btn").prop("disabled",true).css("background","#ccc");
	$("#box").click(function(){
		if($("#box").prop("checked")){
			$("#btn").prop("disabled",false).css("background","#ff9000");
		}else{
			$("#btn").prop("disabled",true).css("background","#ccc");
		}
	})

	$("#btn").click(function(){
		if(!(ok1 && ok2 && ok3 && ok4 && ok5)){
			return false;
		}else{
			var count=localStorage.count;
			if(!count){
				count=1;
			}else{
				count++;
			}
			localStorage.setItem("phone"+count,$("#phone").val());
			localStorage.setItem("pwd"+count,$("#pwd").val());
			localStorage.setItem("email"+count,$("#email").val());
			localStorage.setItem("count",count);

			// location="verify.html"
			alert("注册成功！");
			$("#btn").submit();
		}
		
	})

	$("#test").click(function(){
		console.log(localStorage);
	})
	$("#clear").click(function(){
		// console.log(localStorage);
		localStorage.clear();
	})

})