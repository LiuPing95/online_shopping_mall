var flag1=false;  //用户名正确
var flag2=false;  //邮箱存在
var flag3=false;  //若验证码正确

$(function() {
	/*邮箱*/
	$("#email").blur(function(){
		$(".rcodeInfo strong").text($(this).val());
	});
	
	$('#navigation').show();
    $('#navigation a').bind('click',function(e){
		var $this=$(this);
		if($this.attr("href")!="#"){
			return;
		}else{
			$this.closest('ul').find('li').removeClass('selected');
			$this.parent().addClass('selected');
			$this.parent().find("span").addClass("checked").removeClass("error");
			
			var num=$this.data("type-name");
			$('#steps').stop().animate({marginLeft:'-'+num*600+'px'},500);
		}
    });
   
   
    
    $("#userInfo").focus(function(){
    	$("#userInfo").css("border-color","#ee");
    });
    
    $("#emailInfo").focus(function(){
    	$("#emailInfo").css("border-color","#ee");
    });
});

/*输入验证码后的下一步，即新密码设置*/
function nextstep(){
	
		$("#navigation li").removeClass("selected");
		$("#newpwdli").addClass("selected");
		$("#newpwdli a").attr("href","#");
		$("#newpwdli span").addClass("checked").removeClass("error");
		$('#steps').stop().animate({marginLeft:'-1200px'},500);
	
}

function updateLoginPwd(){
	var newpwd=$("#newpwd").val();
	var renewpwd=$("#rpwds").val();
	var username=$("#username").val();
	var email=$("#email").val();
	
	if(flag3==true && newpwd==renewpwd){
		reg=/^\w{6,16}$/;
		if(reg.test(newpwd)){
			$.post("../servlet/AdminInfoServlet",{op:"updateLoginPwd",pwd:newpwd,email:email,uname:username},function(data){
				data=parseInt($.trim(data));
				if(data>0){
					alert({title:'成功提示',msg:'密码修改成功',timeout:2000,showType:'slide'});
					location.href='login.html';
				}else{
					alert('失败提示','密码修改失败','error');
				}
			});
		}else{
			$("#newpwd").css("border-color","red");
			$("#pwdrule").val("请输入由6-16位的字母、数字和下划线组成的密码");
		}
	}
}

var timer;
var time=20;

/*获取验证码*/
function getCodeInfo(){
	var username=$("#username").val();
	var email=$("#email").val();
	
	if(flag1==true   && flag2==true){
		$("#getcode").attr("disabled",true);	
		
		$("#navigation li").removeClass("selected");
		$("#navigation li:eq(1)").addClass("selected");
		$("#navigation li span:eq(1)").addClass("checked").removeClass("error");
		$('#steps').stop().animate({marginLeft:'-600px'},500);
		
		$.post("../servlet/sendEmailServlet",{uname:username,email:email},function(data){
			data=parseInt($.trim(data));
			
			if(data==1){
				timer=setInterval("setTime()",1000);
				flag3=true;
			}else{
				$("#rcodespan").text("邮件发送失败，请重新获取验证码");
				$("#disabled").attr("disabled",false);
				flag3=true;
			}
		});
	
	}
	
}

function setTime(){
	time--;
	if(time<=0){
		$("#rcodespan").val("再次获取验证码").attr("disabled",false);
		window.clearInterval(timer);
	}else{
		$("rcodespan").val("下一步");
	}
}

function checkUserName(){
	var uname=$("#username").val();
	var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,12}$/;
	if(reg.test(uname)){
		$.post("../servlet/AdminInfoServlet",{op:"checkUserName",uname:uname},function(data){
			data=parseInt( $.trim(data));
			if(data==1){ //说明查到了
				$("#username").text("用户名正确"); 
				$("#userInfo").css("border-color","green");
				flag1=true;
			}else{
				$("#username").text("用户名不存在");
				$("#userInfo").css("border-color","red");
				flag=false;
			}
		}); 
	}else{
		$("#userInfo").text("用户名不正确");
		$("#username").css("border-color","red");	
		flag1=false;
	}
}

function checkEmail(){
	var reg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email=$("#email").val();
	if(reg.test(email)){
		$.post("../servlet/AdminInfoServlet",{op:"checkEmail",email:email},function(data){
			data=parseInt( $.trim(data));
			if(data>0){ //说明查到了
				$("#emailInfo").text("邮箱正确"); 
				$("#email").css("border-color","green");
				flag2=true;
			}else{
				$("#emailInfo").text("邮箱不存在");
				$("#email").css("border-color","red");
				flag2=false;
			}
		}); 
	}else{
		$("#emailInfo").text("邮箱格式不正确");
		$("#email").css("border-color","red");
		flag2=false;
	}
}
