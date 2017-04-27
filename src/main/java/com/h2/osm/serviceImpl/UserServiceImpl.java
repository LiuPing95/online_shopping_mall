package com.h2.osm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.h2.osm.entity.UserInfo;
import com.h2.osm.mapper.UserMapper;
import com.h2.osm.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserMapper userMapper;
	
	public int insert(UserInfo user) {
		return userMapper.insert(user);
	}

	public int delete(List<UserInfo> users) {
		return userMapper.delete(users);
	}

	public int updatePassword(UserInfo user) {
		return userMapper.updatePassword(user);
	}

	public UserInfo getUserByIds(UserInfo user) {
		return userMapper.getUserByIds(user);
	}
}
