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
	public boolean adminRegister(HttpSession session, String rid, String aname, String pwd, String email, String tel) {
		if (rid == null || ("").equals(rid.trim())) {
			return false;
		}
		if (aname == null || ("").equals(aname.trim())) {
			return false;
		}
		if (pwd == null || ("").equals(pwd.trim())) {
			return false;
		}
		if (email == null || ("").equals(email.trim())) {
			return false;
		}
		if (tel == null || ("").equals(tel.trim())) {
			return false;
		}
		AdminInfo admin = new AdminInfo();
		admin.setRid(rid);
		admin.setName(aname);
		admin.setPwd(pwd);
		admin.setEmail(email);
		admin.setTelephone(tel);
		admin.setPhoto(admin.getPhoto());
		adminService.insert(admin);
		return true;
	}

	@RequestMapping("adminToLogin")
	@ResponseBody
	public boolean adminToLogin(HttpSession session, String rid, String name, String pwd, String code) {
		AdminInfo admin = new AdminInfo();
		admin.setRid(rid);
		admin.setName(name);
		admin.setPwd(pwd);
		AdminInfo curUser = adminService.selectByCondition(admin);
		if (curUser == null) {
			return false;
		}
		session.setAttribute(AttributeData.CUR_USER, curUser);
		return true;
	}

	@RequestMapping("backIndex")
	public String backIndex() {
		return "/back/manager/index";
	}
	
	@RequestMapping("vipToLogin")
	@ResponseBody
	public boolean vipToLogin(HttpSession session, String rid, String aname, String pwd, String code) {

		return true;
	}

	@RequestMapping("vipLogin")
	public String vipLogin() {
		return "login";
	}

	@RequestMapping("adminLogin")
	public String adminLogin() {
		return "/back/login";
	}
	
	@RequestMapping("getCurUser")
	@ResponseBody
	public AdminInfo getCurUser(HttpSession session) {
		return (AdminInfo) session.getAttribute(AttributeData.CUR_USER);
	}
	
}
