package com.h2.osm.service;

import org.springframework.stereotype.Service;

import com.h2.osm.entity.AdminInfo;

@Service
public interface AdminService {
	
	public int insert(AdminInfo admin);

	public AdminInfo selectByCondition(AdminInfo admin);
}
