package com.h2.osm.service;

import java.util.List;

import com.h2.osm.entity.UserInfo;

public interface UserService {

	public int insert(UserInfo user);

	public int delete(List<UserInfo> users);

	public int updatePassword(UserInfo user);

	public UserInfo getUserByIds(UserInfo user);

}
