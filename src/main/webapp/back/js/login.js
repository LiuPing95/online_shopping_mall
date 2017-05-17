$(function(){ 
		$(".container").css("position","fixed").css("top",($(window).height()-$(".container").height())/2)
		.css("left",($(window).width()-$(".container").width())/2);
		
		$('.close-button').click(function(){
			$(this).parent().removeClass("slidePageInFromLeft").addClass("slidePageBackLeft");
		});
		
		$(window).resize(function(){
			$(".container").css("position","fixed").css("top",($(window).height()-$(".container").height())/2)
			.css("left",($(window).width()-$(".container").width())/2);
		});
		
		//获取角色下拉列表
		$.post("/online_shopping_mall/role/get",function(data){
			var str="";
			var str1="";
			$.each(data,function(index,item){
				str+="<li><a id='"+item.id+"' href=\"javascript:login('"+item.id+"','loginrole')\">"+item.name+"</a></li>";
				str1+="<li><a id='"+item.id+"' href=\"javascript:login('"+item.id+"','role')\">"+item.name+"</a></li>";
			});
			$("#loginRoles").html("").append($(str));
			$("#registerRoles").html("").append($(str1));
		},"json");
		
		/*checkUname(obj);
		checkPwd(obj);
		checkRePwd();
		checkEmail(obj);
		checkTel(obj);*/
		 
		 
		//触发聚焦事件
		$("#vcode").focus(function(){
			$("#vcode").css("border-color","#ee");
		});
		
		$("#rname").focus(function(){
			$("rname").css("border-color","#ee");
		});
		
		$("#rpwd").focus(function(){
			$("rpwd").css("border-color","#ee");
		});
		
		$("#rpwds").focus(function(){
			$("rpwds").css("border-color","#ee");
		});
		
		$("#email").focus(function(){
			$("email").css("border-color","#ee");
		});
				
		$("#tel").focus(function(){
			$("#tel").css("border-color","#ee");
		});
		
		
	});
	
	
	//当改变角色时触发的
	function login(id,role) {
    	var flag = $("#"+id).text();
    	$("#"+role).val(flag);
    	$("#roleId").val(id);  //将ID存到一个隐藏域
    	$("#register_roleId").val(id);
	}
	
	function showRegisterPage(){
		$(".register-page").addClass("slidePageInFromLeft").removeClass("slidePageBackLeft");
	}
	
	function backlogin(){
		$(".register-page").removeClass("slidePageInFromLeft").addClass("slidePageBackLeft");
	}
	
	function adminLogin(){
		var role=$.trim( $("#roleId").val());
		var name=$.trim( $("#uname").val());
		var pwd=$.trim( $("#pwd").val());
		var code=$.trim( $("#vcode").val());
		
		if(role==""){
			return false;
		}
		if(name==""){
			$("#uname").css("border-color","red"); //写失焦事件把颜色换成黑色
			return false;   
		}
		if(pwd==""){
			return false;
		}
		if(code==""){
			return false;
		}
		
		$.post("/online_shopping_mall/adminToLogin",{rid:role,name:name,pwd:pwd,code:code},function(data){
			if(data == true){
				location.href="backIndex";
			}else{
				alert("用户名或密码错误");
			}
		});
		return false;
	}	
	
	//管理员注册
	 function userEnroll(){
		var rid=$.trim( $("#register_roleId").val());
		var aname=$.trim( $("#rname").val() );
		var pwd=$.trim( $("#rpwd").val());
		var rpwds=$.trim( $("#rpwds").val());
		var email=$.trim( $("#email").val());
		var tel=$.trim( $("#tel").val() );
		/*if(role==null){
			return false;
		}*/
		/*if(rname==null){
			$("#rname").css("border-color","red"); 
			return false; 
		}
		if(pwd==null){
			$("#rpwd").css("border-color","red"); 
			return false;
		}
		if(pwd==null){
			$("#rpwds").css("border-color","red"); 
			return false;
		}
		if(rpwds==null){
			return false;
		}
		if(email==null){
			$("#email").css("border-color","red"); 
			return false;
		}
		if(tel==null){
			$("#tel").css("border-color","red"); 
			return false;
		}		*/
		$.post("/online_shopping_mall/register",{rid:rid,aname:aname,pwd:pwd,email:email,tel:tel},function(data){
			if(data == true){
//				$.messager.show({title:'成功提示',msg:'欢迎，成为皇家工学院的一员。。。',timeout:2000,showType:'slide'});
				window.location.href='adminLogin';
			}else{
				alert("信息填写不符合规范或未填写完整");
			}
		}); 
	 }	


	 function checkUname(obj){
			var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,12}$/;
			if(reg.test(obj.value)){
				$("#check1").text("用户名格式正确");
				$("#check1").css("color","green");
			}else{
				$("#check1").text("用户名不正确");
				$("#check1").css("color","red");	
			}
		}

		function checkPwd(obj){
			var reg=/^[a-zA-Z0-9_]{6,16}$/;
			if(reg.test(obj.value)){
				$("#check2").text("密码格式正确");
				$("#check2").css("color","green");
			}else{
				$("#check2").text("密码不正确");
				$("#check2").css("color","red");	
			}
		}

		function checkRePwd(){
			var pwd=$("#rpwd").val();
			var rpwds=$("#rpwds").val();
			if(pwd==rpwds){
				$("#check3").text("两次密码一致");
				$("#check3").css("color","green");
			}else{
				$("#check3").text("两次密码不一致");
				$("#check3").css("color","red");
			}
			
		}
		function checkEmail(obj){
			/*var reg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var email=$("#email").val();
			if(reg.test(obj.value)){
				$.post("../servlet/AdminInfoServlet",{op:"checkEmail",email:email},function(data){
					data=parseInt( $.trim(data));
					if(data>0){ //说明查到了
						$("#check4").text("该邮箱已经被注册"); 
						$("#check4").css("color","red");
					}else{
						$("#check4").text("邮箱格式正确");
						$("#check4").css("color","green");
					}
				}); 
			}else{
				$("#check4").text("邮箱格式不正确");
				$("#check4").css("color","red");
			}*/
		}

		function checkTel(obj){
			var reg=/^(\d{3}-\d{8}|\d{4}-\d{7})|[1][358]\d{9}$/;
			//var reg=/^((0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?)$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])d{8}$)/;
			if(reg.test(obj.value)){
				$("#check5").text("联系方式格式正确");
				$("#check5").css("color","green");
			}else{
				$("#check5").text("联系方式格式不正确");
				$("#check5").css("color","red");
			}
		}