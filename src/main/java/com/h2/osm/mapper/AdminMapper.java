package com.h2.osm.mapper;

import org.apache.ibatis.annotations.Param;

import com.h2.osm.entity.AdminInfo;

public interface AdminMapper {

	public int insert(@Param("admin") AdminInfo admin);

	public AdminInfo selectByCondition(@Param("admin") AdminInfo admin);

}
