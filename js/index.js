$(function(){
	//获取商品显示到主页
	$.get("js/product.json",function(data){
		
//		console.log(data)
		var productList = data[0].product;
		var str="";
		$.each(productList, function(index,obj) {
//			console.log(index,obj)
			str+="<li>"+
					"<a href='html/details.html?"+obj.code+"'><p><img src='"+obj.img+"' /></p><span>"+obj.title+"</span><i>"+obj.intro+"</i><b>"+obj.price+"元</b>"+
				"</li></a>"
		});
		$(".hotNow ul").html(str)
		
		$("#pro").html(null);
		var str1="";
		for(var i=1;i<data.length;i++){
			str1 += "<div class='proList'><p class='bigWord'>"+data[i].name+"</p><ul>"
//			console.log(data[i].product)
			var products = data[i].product;
			$.each(data[i].product, function(m,object) {
//				console.log(m,object)
				if(m==0){
					str1+="<li class='h570'><a href='html/details.html?"+object.code+"'><img src='"+object.img+"' /></a></li>"
				}else{
					str1+="<li>"+
						"<a href='html/details.html?"+object.code+"'><p><img src='"+object.img+"' /></p><span>"+object.title+"</span><i>"+object.intro+"</i><b>"+object.price+"元</b>"+
					"</li></a>"
				}
				
			});
			str1+="</ul></div>"
		
		}
		$("#pro").html(str1)
	})
	//根据是否登录来显示信息
	if(window.location.search!=""){
//		显示顶部用户名
		var userID = window.location.search.split("=")[1];
		var subuserID = userID.substring(0,10).replace(userID.substring(3,7),"****")+"...";
//		console.log(userID)
		var str = "<a class='left' href='##'>"+subuserID+"</a>"+
						"<i class='iconfont level'>&#xe619;</i>"+
						"<i class='iconfont'>&#xe617;</i>"+
						"<ul class='drop logDrop'>"+
							"<li>"+
								"<a class='left' href='##'>"+subuserID+"</a>"+
								"<i class='iconfont level'>&#xe619;</i>"+
								"<i class='iconfont'>&#xe61a;</i>"+
							"</li>"+
							"<li>"+
								"<a href='index.html'>我的华为账号 </a>"+
								"<a href='index.html'> 退出</a>"+
							"</li>"+
						"</ul>"
		$(".logReg").html(str)
		//显示我的商城下拉菜单中用户名
		var str1 = "<a href='##'>"+subuserID+"</a>"+
								"<i class='iconfont level'>&#xe619;</i>"
		$(".welcome").html(str1)
		//我的商城 我的购物车链接的改变
		$(".shop").attr("href","##")
		$(".gwc").attr("href","html/cart.html")
		
	}else{
		//显示顶部登录注册
		var str = "<a class='login' href='html/login.html'>登陆</a>"+
						"<a class='register' href='html/register.html'>注册</a>"
		$(".logReg").html(str)
		//显示我的商城下拉菜单中登录注册
		var str1 = "你好，请 <a href='html/login.html'>登录 </a>"+
								"<i class='iconfont'>&#xe601;</i>"+
								"<a href='html/register.html'> 注册</a>"
		$(".welcome").html(str1)
		//我的商城 我的购物车链接的改变			
	    $(".shop").attr("href","html/login.html")
	    $(".gwc").attr("href","html/login.html")
	}
	
})
