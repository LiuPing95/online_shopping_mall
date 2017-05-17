$(function(){
	
	//当前登录用户
	$.post("servlet/UserInfoServlet",{op:"getLoginInfo"},function(data){
		if (data == "" || data == null) {
			$("#loginWel").html("您好！请 [<a class=\"yellowd1\" rel=\"nofollow\" href=\"login.html\" target=\"_blank\">登录</a>]  <b class=\"borderdc\">|</b>   [<a class=\"yellowd1\" rel=\"nofollow\" href=\"reg.html\" target=\"_blank\">注册</a>]   <b class=\"borderdc p_0_10\">|</b>");
			location.href="login.html";
		} else {
			$("#loginWel").html("欢迎您"+data.uname+"&nbsp;&nbsp;    <a class=\"Gray7\" href=\"javascript:exitSystem()\"  id=\"loginout\">退出</a><b class=\"borderdc p_0_10\">|</b>");
		}
	},"json");
});


$(function(){
	  var url=document.location.href;
	  var gid=url.substring(url.indexOf("?")+1);
	  
	  if(gid>0){
		  $.post("servlet/GoodsInfoServlet",{op:"findGoodsDetails",gid:gid},function(data){
			  if(data.length>0){
				  
				  $.each(data,function(index,item){
					  $("#detailsTitle").html("  <h2 class=\"details-h2\">["+item.area+"]"+item.gname+"</h2>"
							  +"<p class=\"details-p\">"+item.des+"</p>");
					  $("#wowoprice").html("<strong class=\"wowoprice\"   id=\"wowoprice\">¥"+item.price+"</strong>");
					  $("#detailimg").html("<img width=\"456\" height=\"304\" border=\"0\" src="+item.pic+"   id=\"detailsimg\">");
					  $("#detailDes").html("<p>"+item.des+"</p>");
					  $("#zk").html("<span>价值</span> <span>折扣</span> <span>节省</span> <span class=\"ari\">¥"+2*item.price+"</span><span class=\"ari\">5折</span><span class=\"ari\">¥"+item.price+"</span>");
					  $("#peopersum").html("<strong class=\"ari\" data=\"salenum\"   id=\"peopersum\">"+2*item.gid+"</strong>")
					  $("#cr").html("<li> 价值<br><del class=\"num\">¥"+2*item.price+"</del></li><li> 折扣<br><span class=\"num\">5折</span> </li><li>节省<br><span class=\"num\">¥"+item.price+"</span></li>");
					  $("#titname").html(" <img width=\"128\" height=\"96\" src=\""+item.pic+"\"><span class=\"tit\">"+item.sname+"</span>");
					  $("#py").html("<span class=\"py\"   id=\"py\">¥"+item.price+"</span>");
					  $("#buysubmit").html("<a class=\"butbtn\" data=\"buySubmit\" rel=\"nofollow\" href=\"shopcart.html?"+item.gid+"\">确认购买</a>");
				  });  
			  }else{
				  
				  alert("数据异常，请检查网络");
			  }
			  
		  },"json");
	  }else{
		  alert("初始化错误，请返回首页");
		  location.href="index.html";
	  }
});

function exitSystem(){
	$.post("servlet/UserInfoServlet",{op:"loginOut"},function(data){
		if(data>0){
			location.href="login.html";
		}else{
			$.messager.alert('失败提示','退出失败...','error');
		}
	});
}
