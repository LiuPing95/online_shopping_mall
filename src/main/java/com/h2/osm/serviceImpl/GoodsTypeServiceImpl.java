package com.h2.osm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.h2.osm.entity.GoodsType;
import com.h2.osm.mapper.GoodsTypeMapper;
import com.h2.osm.service.GoodsTypeService;

@Service
public class GoodsTypeServiceImpl implements GoodsTypeService {

	@Autowired
	private GoodsTypeMapper goodsTypeMapper;
	
	public void insert(GoodsType obj) {
		goodsTypeMapper.insertType(obj);
	}

	public List<GoodsType> getTypes() {
		return goodsTypeMapper.getTypes();
	}

	public void del(List<Integer> idList) {
		goodsTypeMapper.del(idList);
	}

}
