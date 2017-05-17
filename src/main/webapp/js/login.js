function checkUname(obj){
		var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,12}$/;
	if(reg.test(obj.value)){
		$("#username_msg").val("用户名格式正确");
		$("#username_msg").css("color","green");
	}else{
		$("#username_msg").val("用户名不正确");
		$("#username_msg").css("color","red");	
	}
}

//管理员注册
function userEnroll(){
		debugger;
		var rid=$.trim( $("#register_roleId").val());
		var aname=$.trim( $("#rname").val() );
		var pwd=$.trim( $("#rpwd").val());
		var rpwds=$.trim( $("#rpwds").val());
		var email=$.trim( $("#email").val());
		var tel=$.trim( $("#tel").val() );
		if(role==null){
			return false;
		}
		if(rname==null){
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
		}		
		$.post("/register",{rid:rid,uname:aname,pwd:pwd,email:email,tel:tel},function(data){
			data=parseInt( $.trim(data));
			if(data>0){
				//$.messager.show({title:'成功提示',msg:'欢迎，成为皇家工学院的一员。。。',timeout:2000,showType:'slide'});
				location.href='login.html';
			}else{
				alert("信息填写不符合规范或未填写完整");
			}
		}); 
	 }


$(function(){
	var xmlDom=createXmlDom();
	xmlDom.async=false;
	xmlDom.load("city.xml");
	
	var pro=$("#province");
	var city=$("#city");
	var district=$("#district");
	
	var pros=xmlDom.getElementsByTagName("province");
	
	for(var i=0;i<pros.length;i++){
		addOption(pros[i],pro);	
	}
	
	$("#province").bind({
		change:function(){
			var code=pro.val();
			$("#city").empty();
			$("#district").empty();
			var opInfo=$("<option value='100100'>--请选择城市--</option>");
			$("#city").prepend(opInfo);
			var opInfo=$("<option value='100101'>--请选择地区--</option>");
			$("#district").prepend(opInfo);
			
			for(var i=0;i<pros.length;i++){
				if(pros[i].nodeType==1 && pros[i].getAttribute("postcode")==code){
					var cities=pros[i].childNodes;
					for(var j=0;j<cities.length;j++){
						if(cities[j].nodeType==1){
							addOption(cities[j],city);	
						}
					}
				}
			}
		}
	});
	
	$("#city").bind({
		change:function(){
			var selPro=pro.val();
			var code=city.val();
			$("#district").empty();
			var opInfo=$("<option value='100101'>--请选择地区--</option>");
			$("#district").prepend(opInfo);
			
			for(var i=0;i<pros.length;i++){
				if(pros[i].nodeType==1 && pros[i].getAttribute("postcode")==selPro){
					var cities=pros[i].childNodes;
					for(var j=0;j<cities.length;j++){
						if(cities[j].nodeType==1 && cities[j].getAttribute("postcode")==code){
							var area=cities[j].childNodes;
							for(var k=0;k<area.length;k++){
								if(area[k].nodeType==1){
									addOption(area[k],district);
								}
							}
						}
					}
				}
			}
		}
	});
})

function addOption(node,obj){
	var opInfo=$(
			"<option value="+node.getAttribute("postcode")+">"+node.getAttribute("name")+"</option>");
	opInfo.appendTo(obj);
}

function createXmlDom(){
	var xmlDom=null;
	if(window.ActiveXObject){
		xmlDom=createIeXmlDom();	
	}else if(document.implementation.createDocument){
		xmlDom=document.implementation.createDocument("","",null);
	}else{
		alert("您的浏览器不支持xmlDom,请及时更新");	
	}
	return xmlDom;
}

function createIeXmlDom(){
	var arr=["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.5.0","MSXML2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument","Microsoft.XMLDOM"];
	for(var i=0;i<arr.length;i++){
		try{
			var ieXmlDom=new ActiveXObject(arr[i]);
			return ieXmlDom;
		}catch(ex){
			alert("您的浏览器不支持MSXML组件，请及时更新浏览器");	
		}
	}
}

function addEmail(){
	$("#regemail").after("<select id='semail'></select>");
	$("#semail").css("width","100px");
	$("#semail").css("margin-left","5px");
	
	var maillist=$("#maillist li");
	for(var i=1;i<maillist.length;i++){
		var opInfo=$("<option value="+maillist.eq(i).text()+">"+maillist.eq(i).text()+"</option>");
		$("#semail").append(opInfo);
	}
}

 function checkUname(obj){
		var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,12}$/;
		if(reg.test(obj.value)){
			$("#username_msg").text("用户名格式正确");
			$("#username_msg").css("color","green");
		}else{
			$("#username_msg").text("用户名不正确");
			$("#username_msg").css("border-color","red");	
		}
	}

	function checkPwd(obj){
		var reg=/^[a-zA-Z0-9_]{6,16}$/;
		var reg1=/^[a-zA-Z0-9]{6,16}&/;
		var reg2=/^[a-zA-Z_]{6,16}&/;
		var reg3=/^[0-9_]{6,16}&/;
		var reg4=/^[a-zA-Z]{6,16}&/;
		var reg5=/^[_]{6,16}&/;
		var reg6=/^[0-9]{6,16}&/;
		var pwd=$("#password").val();
		if(reg.test(obj.value)){
			$("#password_msg").text("密码格式正确");
			$("#password_msg").css("color","green");
			$("#weak").css("backgroundColor","orange");
			$("#middle").css("backgroundColor","blue");
			$("#strong").css("backgroundColor","pink");
		}else  if(reg1.test(obj.value)  | reg2.test(obj.value) | reg3.test(obj.value)){
			$("#password_msg").text("密码格式正确");
			$("#password_msg").css("color","green");
			$("#weak").css("backgroundColor","orange");
			$("#middle").css("backgroundColor","blue");
			$("#strong").css("backgroundColor",'');
		}else  if(reg4.test(obj.value)  | reg5.test(obj.value) | reg6.test(obj.value)){
			$("#password_msg").text("密码格式正确");
			$("#password_msg").css("color","green");
			$("#weak").css("backgroundColor","orange");
			$("#middle").css("backgroundColor",'');
			$("#strong").css("backgroundColor",'');
		}else{
			$("#password_msg").text("密码不正确");
			$("#password_msg").css("border-color","red");	
		}
	}

	function checkRePwd(){
		var pwd=$("#password").val();
		var rpwds=$("#reppassword").val();
		if(pwd==rpwds){
			$("#reppassword_msg").text("两次密码一致");
			$("#reppassword_msg").css("color","green");
		}else{
			$("#reppassword_msg").text("两次密码不一致");
			$("#reppassword_msg").css("border-color","red");
		}
		
	}
	function checkEmail(obj){
		var reg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var email=$("#regemail").val();
		if(email==null | email==""){
			$("#regemail_msg").text("请输入注册邮箱"); 
			$("#regemail_msg").css("border-color","red");
		}else if(reg.test(obj.value)){
			$.post("servlet/AdminInfoServlet",{op:"checkEmail",email:email},function(data){
				data=parseInt( $.trim(data));
				if(data>0){ //说明查到了
					$("#regemail_msg").text("该邮箱已经被注册"); 
					$("#regemail_msg").css("border-color","red");
				}else{
					$("#regemail_msg").text("邮箱格式正确");
					$("#regemail_msg").css("color","green");
				}
			}); 
		}else{
			$("#regemail_msg").text("邮箱格式不正确");
			$("#regemail_msg").css("border-color","red");
		}
	}

	function checkTel(obj){
		var reg=/^(\d{3}-\d{8}|\d{4}-\d{7})|[1][358]\d{9}$/;
		if(reg.test(obj.value)){
			$("#tel_msg").text("联系方式格式正确");
			$("#tel_msg").css("border-color","green");
		}else{
			$("#tel_msg").text("联系方式格式不正确");
			$("#tel_msg").css("border-color","red");
		}
	}
	
	var timer;
	var time=20;
	function sendCode(){
		var uname=$("#username").val();
		var email=$("#regemail").val();
		$("#mycodebtn").attr("disabled",true);
		$.post("servlet/sendEmailServlet",{uname:uname,email:email},
			function(data){
				data=parseInt( $.trim(data));
				if(data==1){
					timer=setInterval("setTime()", 1000);
				}else{
					$("#regsafecode_msg").text("邮件发送失败，请检查邮箱是否正确");
					$("#mycodebtn").attr("disabled",false);
				}			
			});
	}
	
	function setTime(){
		time--;
		if(time<=0){
			$("#mycodebtn").val("再次获取验证码").attr("disabled",false);
			window.clearInterval(timer); 
		}else{
			$("#mycodebtn").val("请在"+time+"秒内输入收到的验证码");
		}
	}
	
	//用户注册
	function register(){
		var uname=$("#username").val();
		var pwd=$("#password").val();
		var email=$("#regemail").val();
		var tel=$("#tel").val();
		var province=$("#province").find("option:selected").text();
		var city=$("#city").find("option:selected").text();
		var district=$("#district").find("option:selected").text();
		
		$.post("servlet/UserInfoServlet",{op:"addvipInfo",
			uname:uname,email:email,pwd:pwd,tel:tel,province:province,city:city,district:district},
			function(data){
				data=parseInt( $.trim(data));
				if(data>0){
					$("#username").val("");
					$("#password").val("");
					$("#reppassword").val("");
					$("#regemail").val("");
					$("#tel").val("");
					/* $("#province").val("");
					$("#city").val("");+
					$("#district").val(""); */
					//$.messager.show({title:'温馨提示',msg:'注册成功',timeout:2000,showType:'slide'});
					location.href="login.html";
				}else{
					alert('注册失败，请您重新注册..');
				}			
		});
	}
