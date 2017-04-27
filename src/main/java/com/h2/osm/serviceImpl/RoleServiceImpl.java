package com.h2.osm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.h2.osm.entity.Role;
import com.h2.osm.mapper.RoleMapper;
import com.h2.osm.service.RoleService;

@Controller
public class RoleServiceImpl implements RoleService{
	
	@Autowired
	private RoleMapper roleMapper;

	public int insert(Role role) {
		return roleMapper.insert(role);
	}

	public int delete(List<Role> roles) {
		return roleMapper.delete(roles);
	}

	public int update(Role role) {
		return roleMapper.update(role);
	}

	public List<Role> getRolesByCondition() {
		return roleMapper.getRolesByCondition();
	}
}
