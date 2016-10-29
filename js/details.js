$(function(){
	$(".productList li:has('ul')").hide()
	$(".productList li").first().mouseenter(function(){
		$(".productList li:has('ul')").show()
		$(".productList li").first().find("i").html("&#xe61b;")
	})
	$(".productList").mouseleave(function(){
		$(".productList li:has('ul')").hide()
		$(".productList li").first().find("i").html("&#xe639;")
	})
	
//	放大镜
	$(".imgzoom-main").mouseover(function(e){
				$(".imgzoom-shot").show()
				$(".imgzoom-pop").show()
//				$(".imgzoom-pop img").show()
				$("#navWrap").css("overflow","hidden")
			})
			$(".imgzoom-main").mousemove(function(e){	
				var shotLeft = e.pageX - $(this).offset().left - $(".imgzoom-shot").outerWidth()/2
				var shotTop = e.pageY - $(this).offset().top - $(".imgzoom-shot").outerHeight()/2
				if(shotLeft<=0){
					shotLeft=0
				}
				if(shotTop<=0){
					shotTop=0
				}
				if(shotLeft>=$(this).outerWidth()-$(".imgzoom-shot").outerWidth()){
					shotLeft=$(this).outerWidth()-$(".imgzoom-shot").outerWidth()
				}
				if(shotTop>=$(this).outerHeight()-$(".imgzoom-shot").outerHeight()){
					shotTop=$(this).outerHeight()-$(".imgzoom-shot").outerHeight()
				}
				$(".imgzoom-shot").css({
					"left":shotLeft,
					"top":shotTop
				})
				var percentX = shotLeft/($(this).outerWidth()-$(".imgzoom-shot").outerWidth())
				var percentY = shotTop/($(this).outerHeight()-$(".imgzoom-shot").outerHeight())
				var imgLeft = percentX * ($(".imgzoom-pop").outerWidth()-$(".imgzoom-pop img").outerWidth())
				var imgTop = percentY * ($(".imgzoom-pop").outerHeight()-$(".imgzoom-pop img").outerHeight())
				$(".imgzoom-pop img").css({
					"left":imgLeft,
					"top":imgTop
				})
			})
			$(".imgzoom-main").mouseout(function(e){
				$(".imgzoom-shot").hide()
				$(".imgzoom-pop").hide()
				$("#navWrap").css("overflow","inherit")
			})
//	商品展示选项卡
//
	$(".showBox>li").first().css({
		"border-bottom":"0",
		"border-top":"1px solid #e01d20"
	})
	$(".showBox>li>div").first().show();
	$(".showBox>li").each(function(){
		$(this).click(function(){
			$(this).find("div").show();
			$(this).siblings().find("div").hide();
			$(this).css({
				"border-bottom":"0",
				"border-top":"1px solid #e01d20"
			})
			$(this).siblings().css({
				"border-bottom":"1px solid #dedede",
				"border-top":"0"
			})
		})
	})
		
	
//	获取地址栏数据显示对应商品
	var id = window.location.search.replace("\?","");
	$.ajax({
		url:"../js/product.json"
	}).done(function(data){
//		console.log(data)
		$.each(data, function(index,obj) {
//			console.log(index,obj)
			$.each(obj.product,function(i,obj1){
				
				if(obj1.code==id){
//					console.log(i,obj1)
					var str="<div class='first'>"+
					"<p class='title'>"+obj1.title+"</p>"+
					"<p class='words'>"+obj1.words+"</span>"+
				"</div>"+
				"<div class='second'>"+
					"<ul>"+
						"<li>华为价：<b>￥"+obj1.price+".00</b></li>"+
						"<li>商品编码："+obj1.code+"</li>"+
						"<li>运      费： <span>满 99 免运费</span></li>"+
						"<li>服      务：由华为商城负责发货，并提供售后服务</li>"+
						"<li>以旧换新：<span><a href='##'>旧机最高抵5000元，立即参加>></a></span></li>"+
					"</ul>"+
				"</div>"+
				"<ul class='third'>"+
					"<li>选择颜色：<ul class='colorList'>"
					var colorObj = obj1.color;
					for(var x in colorObj){
						
//						console.log(colorObj[x])
						str+="<li>"+
								"<span>"+
									"<img src='../"+colorObj[x]+"' class='colorImg'/>"+
									"<img src='../images/details/on.png' class='on'/>"+
								"</span>"+
								"<i>"+x+"</i>"+
							"</li>"
					}
					
					str+=
					"</ul>"+
					"</li>"+
					"<li class='version'>选择制式：<span><i>全网通版</i><img src='../images/details/on.png' class='on'/>"+
						"</span>"+
						
					"</li>"+
					"<li class='rom'>选择容量：<span><i>4GB+64GB</i><img src='../images/details/on.png' class='on'/>"+
						"</span>"+
					"</li>"+
					"<li class='other'>关联商品：<ul>"+
							"<li>"+
								"<span>"+
									"<a href='details.html?1001010036603'>荣耀 NOTE 8</a>"+
									"<img src='../images/details/on.png' class='on'/>"+
								"</span>"+
							"</li>"+
							"<li>"+
								"<span>"+
									"<a href='details.html?10110010133905'>HUAWEI P9 Plus</a>"+
									"<img src='../images/details/on.png' class='on'/>"+
								"</span>"+
							"</li>"+
							"<li>"+
								"<span>"+
									"<a href='details.html?2101010000202'>HUAWEI MateBook</a>"+
									"<img src='../images/details/on.png' class='on'/>"+
								"</span>"+
							"</li>"+
							"<li>"+
								"<span>"+
									"<a href='details.html?1104010003304'>华为路由 Q1</a>"+
									"<img src='../images/details/on.png' class='on'/>"+
								"</span>"+
							"</li>"+
						"</ul>"+
					"</li>"+
					"<li>购买数量："+
						"<div class='totalBox'><span class='minu'>-</span>"+
						"<input type='text' value='1' class='total'/>"+
						"<span class='plus'>+</span></div>"+
					"</li>"+
					"<li class='select'>你选择了<i>琥珀金/全网通版/4GB+64GB</i></li>"+
					"<li><span id='addCart'><i class='iconfont'>&#xe636; </i> 加入购物车</span></li>"+
				"</ul>"
					
					
					$(".proBox").html(str)
					
					var showArr = obj1.show
//					console.log(showArr)
					var str1="";
					$.each(showArr, function(index,src) {
//						console.log(index,src)
						str1+="<img src='../"+src+"'  />"
					});
					$(".showImg").html(str1)
					
				}
			})
		});
	
	
	

	
		
		//	商品选中状态的改变
		$(".colorList>li").find(".on").first().show();
		$(".version").find(".on").show();
		$(".rom").find(".on").show();
		var imgSrcS = $(".colorList").find("li").first().find(".colorImg").attr("src")
		$(".imgzoom-main img").attr("src",imgSrcS)
		$(".imgzoom-pop img").attr("src",imgSrcS)
//		console.log($(".colorList").find("i").first().html())
		var name = $(".title").html()
		$(".title").html($(".title").html()+" "+$(".rom").find("i").html()+" "+$(".version").find("i").html()+" ( "+$(".colorList").find("i").first().html()+" )")
		$(".select").find("i").html($(".colorList").find("i").first().html()+"/"+$(".version").find("i").html()+"/"+$(".rom").find("i").html())
		$(".colorList>li>span").click(function(){
			$(this).find(".on").show();
			$(this).parent().siblings().find(".on").hide();
			var imgSrc = $(this).find(".colorImg").attr("src")
			$(".imgzoom-main img").attr("src",imgSrc)
			$(".imgzoom-pop img").attr("src",imgSrc)
			$(".title").html(name+" "+$(".rom").find("i").html()+" "+$(".version").find("i").html()+" ( "+$(this).next().html()+" )")
			$(".select").find("i").html($(this).next().html()+"/"+$(".version").find("i").html()+"/"+$(".rom").find("i").html())
		})
		$(".plus").click(function(){
			$(".total").val(parseInt($(".total").val())+1)
		})
		$(".minu").click(function(){
			if($(".total").val()==1){
				alert("数量已经是最少了")
			}else{
				$(".total").val(parseInt($(".total").val())-1)
			}
			
		})
		
		//	点击加入购物车
		$("#addCart").click(function(){
			alert("商品已加入购物车，请点击右上方我的购物车查看")
			var src= $(".imgzoom-main img").attr("src");
			var name = $(".title").html();
			var color = $(".title").html().split("( ")[1].replace(" )","")
			var price = $(".second").find("b").html();
			var num = $(".total").val()
			var code = window.location.search.replace("\?","");
			var str = "src="+src+"&name="+name+"&color="+color+"&price="+price+"&num="+num;
			
			$.cookie(code,str);
//			console.log(str)
//			console.log(code,src,name,color,price,num)
//			console.log(document.cookie)
//			console.log($.cookie(code))
			
			
		})
		
	})
	


})
