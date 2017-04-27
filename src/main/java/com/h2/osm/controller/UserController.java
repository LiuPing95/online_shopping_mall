package com.h2.osm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.h2.osm.entity.UserInfo;
import com.h2.osm.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@ResponseBody
	@RequestMapping("/insert")
	public void insert(UserInfo user){
		userService.insert(user);
	}
	
	@ResponseBody
	@RequestMapping("/delete")
	public void delete(List<UserInfo> users){
		userService.delete(users);
	}
	
	@ResponseBody
	@RequestMapping("/update")
	public void updatePassword(UserInfo user){
		userService.updatePassword(user);
	}
	
	@ResponseBody
	@RequestMapping("/select")
	public UserInfo getUserByIds(UserInfo user){
		return userService.getUserByIds(user);
	}
	
	@RequestMapping("")
	public ModelAndView login() {
		return new ModelAndView("/login");
	}
}
