
$(function(){
	
	$.post("../../servlet/AdminInfoServlet",{op:"getLoginInfo"},function(data){
		if(data=="" || data==null){
			//location.href="../login.html";
		}else{
			
			$("#index_loginUser").text(data.aname);
			$("#index_loginPhoto").attr("src","../../"+data.photos);
		}
	},"json");
	
	$('#index_content_info').tabs('add',{   
	    title:'皇家工学院',   
	    closable:true, 
	    fit:true,
	    href:"yc.html"
	});
	
	//当点击菜单的时候，自动创建一个选项卡
	$('#index_tree').tree({   
	   onClick:function(node){
		   var tabs=$('#index_content_info'); //获取选项卡对象
			
		   if(node.id=="index_role"){
			   if(tabs.tabs("exists","角色管理")){
				   //若这个面板选项卡存在就选中
				   tabs.tabs("select","角色管理");
			   }else{
					 
					  tabs.tabs("add",{
						  title:'角色管理',
						  closable:true,
						  fit:true,
						  href:"roles.html"
					   });
				   }
			   
		   }else if(node.id=="index_manager"){
			   if(tabs.tabs("exists","管理员信息")){  
				   tabs.tabs("select","管理员信息");
			   }else{
				  tabs.tabs("add",{
					  title:'管理员信息',
					  closable:true,
					  fit:true,
					  href:"admin.html"
				   });
			   }
		   }else if(node.id=="shopping1"){
			   if(tabs.tabs("exists","审核店铺信息")){  
				   tabs.tabs("select","审核店铺信息");
				   
			   }else{
				  tabs.tabs("add",{
					  title:'审核店铺信息',
					  closable:true,
					  fit:true,
					  href:"checkshop.html"
				   });
			   }
		   }else if(node.id=="shopping3"){
			   if(tabs.tabs("exists","管理店铺信息")){  
				   tabs.tabs("select","管理店铺信息");
				   
			   }else{
				  tabs.tabs("add",{
					  title:'管理店铺信息',
					  closable:true,
					  fit:true,
					  href:"managershop.html"
				   });
			   }
		   }else if(node.id=="shopping2"){
			   if(tabs.tabs("exists","查看店铺信息")){  
				   tabs.tabs("select","查看店铺信息");
			   }else{
				  tabs.tabs("add",{
					  title:'查看店铺信息',
					  closable:true,
					  fit:true,
					  href:"shop2.html"
				   });
			   }
		   }else if(node.id=="index_user"){
			   if(tabs.tabs("exists","会员信息")){  
				   tabs.tabs("select","会员信息");
				   
			   }else{
				  tabs.tabs("add",{
					  title:'会员信息',
					  closable:true,
					  fit:true,
					  href:"vip.html"
				   });
			   }
		   }else if(node.id=="index_goods"){
			   if(tabs.tabs("exists","商品类型信息")){  
				   tabs.tabs("select","商品类型信息");
				   
			   }else{
				  tabs.tabs("add",{
					  title:'商品类型信息',
					  closable:true,
					  fit:true,
					  href:"goodsType.html"
				   });
			   }
		   }else if(node.id=="goods2"){
			   if(tabs.tabs("exists","查看商品信息")){  
				   tabs.tabs("select","查看商品信息");
				   
			   }else{
				  tabs.tabs("add",{
					  title:'查看商品信息',
					  closable:true,
					  fit:true,
					  href:"showgoods.html"
				   });
			   }
		   }else if(node.id=="goods1"){
			   if(tabs.tabs("exists","添加商品信息")){  
				   tabs.tabs("select","添加商品信息");
				   
			   }else{
				  tabs.tabs("add",{
					  title:'添加商品信息',
					  closable:true,
					  fit:true,
					  href:"addgoods.html"
				   });
			   }
		   }else if(node.id=="order2"){
			   if(tabs.tabs("exists","订单管理")){  
				   tabs.tabs("select","订单管理");
				   
			   }else{
				  tabs.tabs("add",{
					  title:'订单管理',
					  closable:true,
					  fit:true,
					  href:"orders.html"
				   });
			   }
		   }		
	   }		
	});
	
	
});