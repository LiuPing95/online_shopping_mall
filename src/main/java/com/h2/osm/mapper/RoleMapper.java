package com.h2.osm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.h2.osm.entity.Role;

@Service
public interface RoleMapper {

	int insert(@Param("role") Role role);

	int delete(@Param("roles") List<Role> roles);

	int update(@Param("role") Role role);

	List<Role> getRolesByCondition();

}
