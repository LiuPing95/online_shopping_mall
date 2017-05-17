package com.h2.osm.mapper;

import org.apache.ibatis.annotations.Param;

import com.h2.osm.entity.Commodity;

public interface GoodsMapper {

	void insertGoods(@Param("obj") Commodity obj);
	
}
