package com.h2.osm.test;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.h2.osm.entity.UserInfo;
import com.h2.osm.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class UserTest {

	@Autowired
	private UserService userService;
	
	@Test
	public void testInsert(){
		UserInfo user = new UserInfo();
		user.setName("店家A");
		user.setPwd("a");
		user.setTelephone("15874869208");
		user.setEmail("1137260351@qq.com");
		user.setDes("");
		user.setPhoto("");
		user.setStatus(2);
		int result = userService.insert(user);
		UserInfo user2 = new UserInfo();
		user2.setName("店家B");
		user2.setPwd("a");
		user2.setTelephone("15874869220");
		user2.setEmail("11372603132@qq.com");
		user2.setDes("");
		user2.setPhoto("");
		user2.setStatus(2);
		int result2 = userService.insert(user2);
		UserInfo user3 = new UserInfo();
		user3.setName("会员A");
		user3.setPwd("a");
		user3.setTelephone("15874869221");
		user3.setEmail("11372603232@qq.com");
		user3.setDes("");
		user3.setPhoto("");
		user3.setStatus(2);
		int result3 = userService.insert(user3);
		assertTrue(result2>0 && result>0 && result3>0);
	}
	
	@Test
	public void testDelete(){
		List<UserInfo> users = new ArrayList<UserInfo>();
		UserInfo user2 = new UserInfo();
		user2.setId("2");
		UserInfo user3 = new UserInfo();
		user3.setId("3");
		users.add(user2);
		users.add(user3);
		userService.delete(users);
	}
	
	@Test
	public void testUpdate(){
		UserInfo user = new UserInfo();
		user.setId("4");
		user.setPwd("888888");
		userService.updatePassword(user);
		assertTrue(userService.updatePassword(user)>0);
	}
	
	@Test
	public void getUserByUserInfo(){
		UserInfo user = new UserInfo();
		user.setName("会员A");
		System.out.println(userService.getUserByIds(user));
//		assertTrue(userService.getUserByIds(user).equals(null));
	}
}
