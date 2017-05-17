package com.h2.osm.service;

import java.util.List;

import com.h2.osm.entity.UserInfo;

public interface UserService {

	int insert(UserInfo user);

	int delete(List<UserInfo> users);

	int updatePassword(UserInfo user);

	UserInfo getUserByIds(UserInfo user);

}
