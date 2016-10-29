$(function(){
	$(".one>.content").show()
	$(".one>a").css("background","#eb1c24");
	$(".tab>li>a").each(function(){
		$(this).click(function(){
			$(this).css("background","#eb1c24");
			$(this).parent().siblings().find("a").css("background","#999");
			$(this).next().show()
			$(this).parent().siblings().find(".content").hide()
		})
	})
	$(".content").Validform({
		tiptype:3	
	})
	
//	密码强度颜色的设置
	function pwFun(m){
			$(".pwlength i").css("background","#eee")
			var pattern1 = /\d+/g;
			var pattern2 = /[a-zA-Z]+/gi;
			var pattern3 = /[~!@#\$%^&*\(\)\{\};,.\?\/'"]+/g;
			if(pattern1.test(m.val())){

				m.next().find("i").first().css({
					"background":"#f00",
					"color":"#fff"
				})
			}
			if(pattern2.test(m.val())){
				m.next().find("i").first().css({
					"background":"#f1d93a",
					"color":"#fff"
				})
				m.next().find("i").first().next().css({
					"background":"#f1d93a",
					"color":"#fff"
				})
			}
			if(pattern3.test(m.val())){
				m.next().find("i").css({
					"background":"#63b418",
					"color":"#fff"
				})
			}
		}
	$(".password").blur(function(){
		pwFun($(this));
	})

	
	//注册成功数据的存储
	function register(userID,password){
				$.ajax({
					url: "http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+userID+"&password"+password,
					type: 'POST',
				})
				.done(function(data) {
					console.log(data);
					if(data==0){
						alert("用户名已存在")
					}else if(data==1){
						window.location="login.html";
						alert("注册成功")
						
					}else{
						alert("数据库报错")
					}
				})
			}
	//所有数据通过验证进行存储
	$(".confirm").each(function(){
		$(this).click(function(){
			var sum=0;
			$(".Validform_checktip").each(function(){
				if($(this).html()=="通过信息验证！"){
					sum++;
				}
			})
			if(sum>=3){
				register($(".userID").val(),$(".password").val())
			}else{
				alert("请填写正确信息！")
				return false;
			}
		})
	})
})
