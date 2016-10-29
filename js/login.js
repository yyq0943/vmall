
$(function(){
	//随机生成验证码
	var n1;
	var n2;
	var n3;
	var n4;
	var str="";
	var arr1= [0,1,2,3,4,5,6,7,8,9]
	var arr11=arr1.join("")
	var arr2=[]
	for(i=97;i<=122;i++){
		arr2.push(String.fromCharCode(i))
		}
	var arr22=arr2.join("")
	var arr3 =arr11+arr22
	n1=arr3[parseInt(Math.random()*arr3.length)]
	n2=arr3[parseInt(Math.random()*arr3.length)]
	n3=arr3[parseInt(Math.random()*arr3.length)]
	n4=arr3[parseInt(Math.random()*arr3.length)]
	$("#validCode").html(n1+n2+n3+n4);
	$(".iconfont").on("click",function(){
		n1=arr3[parseInt(Math.random()*arr3.length)]
		n2=arr3[parseInt(Math.random()*arr3.length)]
		n3=arr3[parseInt(Math.random()*arr3.length)]
		n4=arr3[parseInt(Math.random()*arr3.length)]
		$("#validCode").html(n1+n2+n3+n4);
	})
	//登录验证
	function login(userID,password){
		$.ajax({
			url: "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password"+password,
			type: 'POST',
			
		})
		.done(function(data) {
			if(data==0){
				alert("用户名不存在")
			}else if(data==2){
				alert("用户名密码不符")
			}else{
				alert("登录成功")
				window.location="http://localhost/vmall/index.html?userID="+userID;
			}
		})
	}
	$(".loginBox").submit(function(){
		if($("#code").val()==$("#validCode").html()){
			login($("#userID").val(),$("#password").val())
			$.cookie("userID",$("#userID").val(),{expires:7});
		}else{
			alert("验证码错误")
		}
		return false;
	})
	//判断记住密码框的选中状态并存入cookie
	$("#remember").on("change",function(){
		var Checked = $(this).prop("checked")
		$.cookie("remember",Checked,{expires:7})
	})

	if($.cookie().remember=="true"){
//		复选框选中
		$("#remember").prop("checked",true)
//		用户名显示
		$("#userID").val($.cookie().userID)
	}
})
