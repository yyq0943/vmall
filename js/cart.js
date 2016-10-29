$(function(){

//合计金额改变
	function totalChange(){
		var total =0;
		$.each($(".tr-total"), function() {
			var everyPrice =$(this).html().split("￥")[1]
	//		console.log(parseInt(everyPrice))
			total+=parseInt(everyPrice);
		});
		$("#totalCount").find("span").html("￥"+total+".00")
	}
//	选中金额改变
	function selectChange(){
		var stotal =0;
		$.each($(".tr-total"), function() {
			var everyPrice =$(this).html().split("￥")[1]
	//		console.log(parseInt(everyPrice))
			total+=parseInt(everyPrice);
		});
		$("#totalCount").find("span").html("￥"+total+".00")
	}
		
	
//获取cookie中商品的属性
//	console.log(document.cookie)
	var n = 0;
		for(var i in $.cookie()){
			n++;
		}
		if(n>1){
			var str="";
			var proArr = document.cookie.split(";")
			console.log(proArr)
			$.each(proArr,function(x,proHash){
				var code = proHash.replace(" ","").split("=")[0]
				var proMsg = proHash.replace(" ","").split("=")[1]
		//		console.log(code,proMsg)
				var eveMsg = decodeURIComponent(proMsg).split("&")
		//		console.log(eveMsg)
				var newArr=[];
				$.each(eveMsg,function(a,eve){
					var neve = eve.split("=")[1]
					newArr.push(neve)
					
				})
			console.log(newArr[3])
				var t =newArr[3].split("￥")
				var t1 = t[1]*newArr[4];
				str+="<tr>"+
							"<td class='tr-check'>"+
								"<input type='checkbox' />"+
							"</td>"+
							"<td class='tr-pro'>"+
								"<div class='pro-area'>"+
									"<p class='p-img left'>"+
										"<img src='"+newArr[0]+"'  />"+
									"</p>"+
									"<p class='p-name'>"+newArr[1]+"</p>"+
									"<p class='p-color'>颜色："+newArr[2]+"</p>"+
								"</div>"+
							"</td>"+
							"<td class='tr-price'>"+newArr[3]+"</td>"+
							"<td class='tr-quan'>"+
								"<div class='sc-area'>"+
									"<div class='area'>"+
										"<i class='iconfont plus'>&#xe61a;</i>"+
										"<i class='iconfont minu'>&#xe617;</i>"+
										"<input class='numBox' type='text' value='"+newArr[4]+"'/>"+
									"</div>"+
								"</div>"+
							"</td>"+
							"<td class='tr-total'>￥"+t1+".00</td>"+
							"<td class='tr-operate'>"+
								"<i class='iconfont del'>&#xe63c;</i>"+
							"</td>"+
						"</tr>"
			})
			$("tbody").html(str)
		}else{
			var str1="<div class='smile'><img class='smileImg' src='../images/img/bg31.png'/><p class='gray'>亲，您购物车里还没有物品哦，快去逛逛吧！</p></div>"
			$("tbody").html(str1)
		}
	
	
	
	//	点击按钮数量增加减少 小计金额改变
	$(".plus").click(function(){
		var num = $(this).next().next().val();
		$(this).next().next().val(parseInt($(this).next().next().val())+1)
		var price = $(this).parent().parent().parent().prev().html().split("￥")[1]
		$(this).parent().parent().parent().next().html("￥"+parseFloat(price)*parseInt($(this).next().next().val())+".00")
		
	})
	$(".minu").click(function(){
		var num = $(this).next().val();
		if(num==1){
			alert("数量已经是最少了")
		}else{
			$(this).next().val(parseInt($(this).next().val())-1)
			var price = $(this).parent().parent().parent().prev().html().split("￥")[1]
			$(this).parent().parent().parent().next().html("￥"+parseFloat(price)*parseInt($(this).next().val())+".00")
		}
	})
//	输入数量 小计金额改变
	$(".numBox").change(function(){
		var price = $(this).parent().parent().parent().parent().find(".tr-price").html().split("￥")[1];
		console.log(price)
		var ltotal = "￥"+parseInt(price)*$(this).val()+".00";
		console.log(ltotal)
		$(this).parent().parent().parent().parent().find(".tr-total").html(ltotal)
	})

	//选中改变
	var seTotal = 0;
	$.each($(".tr-check input"), function() {
		
		$(this).change(function(){
//				alert(0)
			
			if($(this).prop("checked")){
				
			seTotal+= parseInt($(this).parent().parent().find(".tr-total").html().split("￥")[1])
			console.log(seTotal)
			
			}
			$("#totalCount").find("span").html("￥"+seTotal+".00")
		})
	});
//		console.log($(this))
		
		
//	}
	
	console.log(document.cookie)
	//点击删除商品
	$(".del").click(function(){
		$(this).parent().parent().remove();
		totalChange();
		var src=$(this).parent().parent().find("img").attr("src")
		var n = 0;
		for(var i in $.cookie()){
			n++;
		}
		if(n>1){
			var proArr1 = document.cookie.split(";")
	//		console.log($.cookie())
			$.each(proArr1,function(x,proHash){
				var code = proHash.replace(" ","").split("=")[0]
				var proMsg = proHash.replace(" ","").split("=")[1]
		//		console.log(code,proMsg)
				var eveMsg = decodeURIComponent(proMsg).split("&")[0].split("=")[1]
	//			console.log(eveMsg,src)
				if(eveMsg==src){
					$.removeCookie(code,{path:"/vmall/html"})
				}
			})
	//		console.log($.cookie())
		}else{
			var proArr1 = document.cookie
	//		console.log($.cookie())
//			$.each(proArr1,function(x,proHash){
				var code = proArr1.replace(" ","").split("=")[0]
				var proMsg = proArr1.replace(" ","").split("=")[1]
		//		console.log(code,proMsg)
				var eveMsg = decodeURIComponent(proMsg).split("&")[0].split("=")[1]
	//			console.log(eveMsg,src)
				if(eveMsg==src){
					$.removeCookie(code,{path:"/vmall/html"})
				}
//			})
		}
		
	})
	
//	全选
	$(".tr-check input").first().on("change",function(){
		console.log($(this).prop("checked"))
		if($(this).prop("checked")){
			$(".tr-check input").prop("checked",true)
			totalChange();
		}else{
			$(".tr-check input").prop("checked",false)
			
		}
		
		
	})
	$("#all").on("change",function(){
		console.log($(this).prop("checked"))
		if($(this).prop("checked")){
			$(".tr-check input").prop("checked",true)
			totalChange();
		}else{
			$(".tr-check input").prop("checked",false)
			$("#totalCount").find("span").html("￥0.00")
		}
		
	})
//删除选中商品
	$("#delSelect").click(function(){
//		console.log($(".tr-check input").length)
		for(var i=1; i<$(".tr-check input").length;i++){
			if($(".tr-check input").eq(i).prop("checked")){
				$(".tr-check input").eq(i).parent().parent().remove();
				totalChange();
				var src=$(".tr-check input").eq(i).parent().parent().find("img").attr("src")
				
				var o = 0;
				for(var i in $.cookie()){
					o++;
				}
				console.log(n)
				if(o>1){
					
					var proArr1 = document.cookie.split(";")
			//		console.log($.cookie())
					$.each(proArr1,function(x,proHash){
						var code = proHash.replace(" ","").split("=")[0]
						var proMsg = proHash.replace(" ","").split("=")[1]
				//		console.log(code,proMsg)
						var eveMsg = decodeURIComponent(proMsg).split("&")[0].split("=")[1]
			//			console.log(eveMsg,src)
						if(eveMsg==src){
							$.removeCookie(code,{path:"/vmall/html"})
						}
					})
				}else{
					
					console.log(src)
					var proArr1 = document.cookie
			//		console.log($.cookie())
		//			$.each(proArr1,function(x,proHash){
						var code = proArr1.replace(" ","").split("=")[0]
						var proMsg = proArr1.replace(" ","").split("=")[1]
				//		console.log(code,proMsg)
						var eveMsg = decodeURIComponent(proMsg).split("&")[0].split("=")[1]
						console.log(eveMsg,src)
						if(eveMsg==src){
							$.removeCookie(code,{path:"/vmall/html"})
						}
//			})
				}
			}
		}
	})
	
})