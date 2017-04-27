package com.h2.osm.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.h2.osm.entity.AdminInfo;
import com.h2.osm.mapper.AdminMapper;
import com.h2.osm.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminMapper adminMapper;

	public int insert(AdminInfo admin) {
		return adminMapper.insert(admin);
	}

	public AdminInfo selectByCondition(AdminInfo admin) {
		return adminMapper.selectByCondition(admin);
	}
	
}
