package com.h2.osm.mapper;

import org.apache.ibatis.annotations.Param;

import com.h2.osm.entity.Store;

public interface StoreMapper {

	void insertStore(@Param("obj") Store obj);

}
