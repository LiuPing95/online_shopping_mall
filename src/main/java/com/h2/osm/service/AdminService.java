package com.h2.osm.service;

import com.h2.osm.entity.AdminInfo;

public interface AdminService {
	
	int insert(AdminInfo admin);

	AdminInfo selectByCondition(AdminInfo admin);
}
