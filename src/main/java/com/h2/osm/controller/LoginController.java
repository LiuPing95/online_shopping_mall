package com.h2.osm.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.h2.osm.entity.AdminInfo;
import com.h2.osm.service.AdminService;
import com.h2.osm.util.AttributeData;

@Controller
@RequestMapping("/")
public class LoginController {
	
	@Autowired
	private AdminService adminService;
	
	@RequestMapping("register")
	@ResponseBody
	public int adminRegister(HttpSession session, String rid, String aname, String pwd, String email, String tel){
		if(rid == null || ("").equals(rid.trim())){
			return -1;
		}
		if(aname == null || ("").equals(aname.trim())){
			return -1;
		}
		if(pwd == null || ("").equals(pwd.trim())){
			return -1;
		}
		if(email == null || ("").equals(email.trim())){
			return -1;
		}
		if(tel == null || ("").equals(tel.trim())){
			return -1;
		}
		AdminInfo admin = new AdminInfo();
		admin.setRid(10006+"");
		admin.setName(aname);
		admin.setPwd(pwd);
		admin.setEmail(email);
		admin.setTelephone(tel);
		admin.setStatus(admin.getStatus());
		admin.setPhoto(admin.getPhoto());
		int result = adminService.insert(admin);
		session.setAttribute(AttributeData.CURRENTADMINLOGIN, admin);
		return result;
	}
	
	@RequestMapping("adminLogin")
	public String adminLogin(HttpSession session, String rid, String aname, String pwd, String code) {
		if(rid == null || ("").equals(rid.trim())){
			return null;
		}
		if(aname == null || ("").equals(aname.trim())){
			return null;
		}
		if(pwd == null || ("").equals(pwd.trim())){
			return null;
		}
		/*if(code == null || ("").equals(code.trim())){
			return null;
		}*/
		AdminInfo admin = new AdminInfo();
		admin.setRid(rid);
		admin.setName(aname);
		admin.setPwd(pwd);
		AdminInfo result = adminService.selectByCondition(admin);
		if(result != null){
			session.setAttribute(AttributeData.CURRENTADMINLOGIN, admin);
			//TODO:跳转到后台管理界面
			//return "back/manager/index";
		}else{
			return "back/login";
		}
		return null;
	}
	
}
