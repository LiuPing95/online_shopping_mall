var total="";
function addNum(obj){
	var num=$(obj).prev().val();
	if(num<0){
		$(obj).prev().val(1);
	}else if(num>=999){
		$(obj).prev().val(999);
	}else{
		num++;
		$(obj).prev().val(num);
		getPrice($(obj).prev());
	}
	total=num;
	return total;
}

$(".yahei").bind({
	change:function(){
		getPrice(this);
	}
});

function getPrice(obj){
	var price=$(obj).parent().parent().prev().children().eq(0).text();
	price=price.substr(1,price.length-1);
	
	price=price*$(obj).val();
	$(obj).parent().parent().next().children().eq(0).text( "￥"+price);
	
	getAllPrice();
}


function getAllPrice(){
		var allPrice=0;
	$("tbody").children().each(function(index, element) {
       var singlePrice=$(element).children().eq(4).children().eq(0).text();
	   singlePrice=singlePrice.substr(1,singlePrice.length-1);
	   allPrice+= parseInt( singlePrice );
    });
	$("tfoot .price").text("￥"+allPrice);
}


function subNum(obj){
	var num=$(obj).next().val();
	if(num<=1){
		alert("亲，数量已经为1，不能再减了哦...");
		$(obj).next().val(1);
	}else if(num>999){
		$(obj).next().val(999);
	}else{
		num--;
		$(obj).next().val(num);
		getPrice($(obj).next());
	}
	total=num;
	return total;
}


function removeProduct(obj){
	$(obj).parent().parent().remove();
	getAllPrice();
}

$(function(){
	$.post("servlet/UserInfoServlet",{op:"getLoginInfo"},function(data){
		if (data == "" || data == null) {
			$("#index_loginuser").html("您好！请 [<a class=\"yellowd1\" rel=\"nofollow\" href=\"login.html\" target=\"_blank\">登录</a>]  <b class=\"borderdc\">|</b>   [<a class=\"yellowd1\" rel=\"nofollow\" href=\"reg.html\" target=\"_blank\">注册</a>]   <b class=\"borderdc p_0_10\">|</b>");
		} else {
			$("#index_loginuser").html("欢迎您"+data.uname+"&nbsp;&nbsp;    <a class=\"Gray7\" href=\"javascript:loginout()\"  id=\"loginout\">退出</a><b class=\"borderdc p_0_10\">|</b>");

			var usid=data.usid;
			var url=document.location.href;
			var gid=url.substring(url.indexOf("?")+1);
			if(gid>0){
				$.post("servlet/GoodsInfoServlet",{op:"findBuyGoodsInfo",gid:gid},function(data){
					if(data.length>0){
						
						var num=$("#productnum").val();
						var totalprice=data[0].price;
						
						$.each(data,function(index,item){

							$("#goodsName").html(" <a href='#'><span class='title'>"+item.gname+"</span></a> ");
							$("#goodsValue").html("<span class='price'>"+2*item.price+"</span>");
							$("#goodsPrice").html("<span class='price'>"+item.price+"</span>");
							$("#totalPrice").html("<span id='yprice' class='price'>"+item.price+"</span>");
							$("#TotalPrice").html("<strong class='price' style='float:right'>"+item.price+"</strong>");
							
							$("#nextbtn").bind({
								click:function(){
									$.post("servlet/OrderInfoServlet",{op:"AddOrders",usid:usid,totalprice:totalprice,nums:num},function(data){
										if(data>0){
											alert("订单添加成功");
											location.href="back/login.html";
										}else{
											alert("商品加入订单失败.....");
										}
									});
								}
							});
						});
					}
				},"json");
			}
		}
	},"json");
});



