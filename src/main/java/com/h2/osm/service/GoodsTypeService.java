package com.h2.osm.service;

import java.util.List;

import com.h2.osm.entity.GoodsType;

public interface GoodsTypeService {

	void insert(GoodsType obj);

	List<GoodsType> getTypes();

	void del(List<Integer> idList);
	
}
