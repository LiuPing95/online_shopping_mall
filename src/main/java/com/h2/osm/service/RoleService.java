package com.h2.osm.service;

import java.util.List;

import com.h2.osm.entity.Role;

public interface RoleService {

	int insert(Role role);

	int delete(List<Role> roles);

	int update(Role role);

	List<Role> getRolesByCondition();

}
