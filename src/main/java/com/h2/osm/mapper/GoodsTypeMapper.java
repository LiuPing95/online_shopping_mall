package com.h2.osm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.h2.osm.entity.GoodsType;

public interface GoodsTypeMapper {

	void insertType(@Param("obj") GoodsType obj);

	List<GoodsType> getTypes();

	void del(@Param("idList") List<Integer> idList);

	void update(@Param("obj") GoodsType obj);

}
