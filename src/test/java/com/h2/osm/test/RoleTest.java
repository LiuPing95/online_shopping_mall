package com.h2.osm.test;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.h2.osm.entity.Role;
import com.h2.osm.service.RoleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class RoleTest {

	@Autowired
	private RoleService roleService;
	
	@Test
	public void testInsert(){
		Role role = new Role();
		role.setName("管理员");
		role.setDes("这是管理员，可对用户信息、店铺进行操作");
		role.setStatus(2);
		int result = roleService.insert(role);
		assertTrue(result>0);
	}
	
	@Test
	public void testDelete(){
		Role role = new Role();
		role.setId(1);
		Role role2 = new Role();
		role2.setId(3);
		List<Role> roles = new ArrayList<Role>();
		roles.add(role);
		roles.add(role2);
		int result = roleService.delete(roles);
		assertTrue(result>0);
	}
	
	@Test
	public void testUpdate(){
		Role role = new Role();
		role.setId(4);
		role.setStatus(1);
		int result = roleService.update(role);
		assertTrue(result>0);
	}
	
	@Test
	public void testGet(){
		Role role = new Role();
		role.setId(4);
//		List<Role> roles = roleService.getRolesByCondition(role);
//		System.out.println(roles);
	}
}
