package com.h2.osm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.h2.osm.entity.Role;

@Service
public interface RoleService {

	public int insert(Role role);

	public int delete(List<Role> roles);

	public int update(Role role);

	public List<Role> getRolesByCondition();

}
