package com.h2.osm.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.h2.osm.entity.Role;
import com.h2.osm.service.RoleService;
import com.h2.osm.util.AttributeData;

@Controller
@RequestMapping("/role")
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	@ResponseBody
	@RequestMapping("/insert")
	public int insert(Role role){
		return roleService.insert(role);
	}
	
	@ResponseBody
	@RequestMapping("/delete")
	public int delete(List<Role> roles){
		return roleService.delete(roles);
	}
	
	@ResponseBody
	@RequestMapping("/update")
	public int update(Role role){
		return roleService.update(role);
	}
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping("/get")
	public List<Role> getRolesByCondition(HttpSession session){
		Object roles = session.getAttribute(AttributeData.ALLROLES);
		List<Role> roleList = new ArrayList<Role>();
		if(roles != null){
			roleList = (List<Role>) roles;
		}else{
			roleList = roleService.getRolesByCondition();
		}
		return roleList;
	}
}
