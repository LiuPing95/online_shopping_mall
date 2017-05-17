//var flag=true;
$(function(){
	//flag=true;
	findIndex(1,4);
});

function findIndex(pageNo,pageSize){
	$.post("servlet/GoodsInfoServlet",{op:"findGoodsIndex",pageNo:pageNo,pageSize:pageSize},function(data){
		if(data.length>0){
			var str="";
			var obj=$.parseJSON(data);
			$.each(obj,function(index,item){
				
				str+="<li class=\"good-list\">"
					+"<h2 class=\"good-title\">"
					+"<a class=\"biaoa\" title=\"【石鼓区】仅98元，享价值196元『熊猫餐谋环球海鲜自助餐厅』周一至周五双人自助午餐1份！提供免费WIFI，提供免费停车位！必含女士1名，提供免费专车接送，尽享环球美食！\" target=\"_blank\" href=\"#\">"
					+"<strong>【"+item.area+"】,"+item.gname+"</strong>	"
					+item.des+"</a></h2>"
					+"<div class=\"index-smalllogo\">"
					+"<a class=\"yuy\" target=\"_blank\" href=\"#\">免预约</a></div>"
					+"<a class=\"picture\" target=\"_blank\" href=\"#\">"
					+"<img width=\"348\" height=\"232\" rel=\"nofollow\" src=\""+item.pic+"\"></a>"
					+"<div class=\"buy-boxInd clearfix\">"
					+"<a class=\"bh buy_a\" rel=\"nofollow\" href=\"details.html?"+item.gid+"\" target=\"_blank\" status=\"0\">购买</a>"
					+"<span class=\"num\">¥"+item.price+"</span>" +
							"<span class=\"past\">价值 ¥ "+2*item.price+"</span></div></li>";
			},"json");
			$("#goods-allIndclearfix").append(str);
		}
	});
}

