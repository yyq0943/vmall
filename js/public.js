$(function(){
//	右侧固定按钮

//	回到顶部
	$(window).scroll(function(){
		$(".backTop").fadeIn("slow");
	})
	$(".backTop").click(function(){
		document.body.scrollTop=0;
		document.documentElement.scrollTop = 0;
	})
//	遮罩层弹窗
	$(".moreQue").click(function(){
		$(".modalWrap").show();
	})
	$(".closeBtn").click(function(){
		$(".modalWrap").hide();
	})
	$(".submitBtn").click(function(){
		alert("谢谢您的宝贵建议，我们将不断改进！")
		$(".modalWrap").hide();
	})
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
	$(".random").on("click",function(){
		n1=arr3[parseInt(Math.random()*arr3.length)]
		n2=arr3[parseInt(Math.random()*arr3.length)]
		n3=arr3[parseInt(Math.random()*arr3.length)]
		n4=arr3[parseInt(Math.random()*arr3.length)]
		$("#validCode").html(n1+n2+n3+n4);
	})
	
//	顶部下拉菜单
	$(".dropParent").mouseover(function(){
		$(this).find("ul").show();
	})
	$(".dropParent").mouseout(function(){
		$(this).find("ul").hide();
	})
//	二维码的切换
	$(".qrcodeTab li i").first().css({"color":"#ca141d"});
	$(".qrcodeTab div").first().show();
	$(".qrcodeTab li i").each(function(){
		$(this).mouseenter(function(){
			$(this).css({"color":"#ca141d"});
			$(this).parent().siblings().find("i").css({"color":"#888"});
			$(this).siblings().show();
			$(this).parent().siblings().find("div").hide();
		})
	})
//我的商城我的购物车下拉菜单
	$(".gwcBox>li").each(function(){
		$(this).mouseenter(function(){
			$(this).find("div").show()
		})
		$(this).mouseleave(function(){
			$(this).find("div").hide()
		})
	})


	
//banner轮播图
	var curIndex = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  	var autoChange = setInterval(function(){ 
	    if(curIndex < $(".imgList li").length-1){ 
	      curIndex ++; 
	    }else{ 
	      curIndex = 0;
	    }
	    //调用变换处理函数
	    changeTo(curIndex); 
  	},2500);
  	
  	$(".indexList").find("li").each(function(item){ 
    	$(this).hover(function(){ 
      	clearInterval(autoChange);
      	changeTo(item);
     	 curIndex = item;
    },function(){ 
      	autoChange = setInterval(function(){ 
	        if(curIndex < $(".imgList li").length-1){ 
	          curIndex ++; 
	        }else{ 
	          curIndex = 0;
	        }
	        //调用变换处理函数
	        changeTo(curIndex); 
	      	},2500);
    	});
  	});
  	function changeTo(num){ 
    		$(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
    		$(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
    		$(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  	}
  	
  	
  	
	var curIndex1 = 0; //当前index
     //  alert(imgLen);
     // 定时器自动变换2.5秒每次
  	var autoChange1 = setInterval(function(){ 
	    if(curIndex1 < $(".imgList1 li").length-1){ 
	      curIndex1 ++; 
	    }else{ 
	      curIndex1 = 0;
	    }
	    //调用变换处理函数
	    changeTo1(curIndex1); 
  	},2500);
  	
  	$(".indexList1").find("li").each(function(item){ 
    	$(this).hover(function(){ 
      	clearInterval(autoChange1);
      	changeTo1(item);
     	 curIndex1 = item;
    },function(){ 
      	autoChange1 = setInterval(function(){ 
	        if(curIndex1 < $(".imgList1 li").length-1){ 
	          curIndex1 ++; 
	        }else{ 
	          curIndex1 = 0;
	        }
	        //调用变换处理函数
	        changeTo1(curIndex1); 
	      	},2500);
    	});
  	});
  	function changeTo1(num){ 
    		$(".imgList1").find("li").removeClass("imgOn1").hide().eq(num).fadeIn().addClass("imgOn1");
    		$(".infoList1").find("li").removeClass("infoOn1").eq(num).addClass("infoOn1");
    		$(".indexList1").find("li").removeClass("indexOn1").eq(num).addClass("indexOn1");
  	}
  	
//banner图左侧商品列表
	$(".productList li").each(function(){
		$(this).mouseenter(function(){
			$(this).find(".innerList").show()
			$(this).siblings().find(".innerList").hide()
		})
		$(this).mouseleave(function(){
			$(this).find(".innerList").hide()
		})
	})

})
