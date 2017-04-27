package com.h2.osm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import com.h2.osm.entity.UserInfo;

public interface UserMapper {

	public int insert(@Param("user") UserInfo user);

	public int delete(@Param("users") List<UserInfo> users);

	public int updatePassword(@Param("user") UserInfo user);

	public UserInfo getUserByIds(@Param("user") UserInfo user);
	
}
