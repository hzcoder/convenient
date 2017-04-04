$(function(){
	var count=localStorage.getItem("count");
	$("#head span").text(localStorage.getItem("phone"+count));
	function generateCode(){
		var str="";
			for(var i=1;i<=4;i++){
				var n=Math.floor(Math.random()*62);
				if(n<10){
					str+=n;
				}else if(n<36){
					str+=String.fromCharCode(n+55);
				}else{
					str+=String.fromCharCode(n+61);
				}
			}
			return str;
	}
	$("#code").text(generateCode());

	$("#check").click(function(){
		if($("#verify").val().toLowerCase()==$("#code").text().toLowerCase()){
			location="success.html";
			// $("#check").submit();
		}else{
			$("#error").show();
		}
	})

	$("#resend").click(function(){
		num=30;
		$("#resend").prop("disabled",true);
		timer=setInterval(countDown, 1000);
	})
	function countDown(){
		num--;
		if(num>=1){
			$("#resend span").text(num);
		}else{
			$("#code").text(generateCode());
			$("#resend span").text(30);
			clearInterval(timer);
			$("#resend").prop("disabled",false);
		}
	}
	
})