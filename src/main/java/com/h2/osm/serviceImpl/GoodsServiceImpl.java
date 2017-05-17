package com.h2.osm.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.h2.osm.entity.Commodity;
import com.h2.osm.mapper.GoodsMapper;
import com.h2.osm.service.GoodsService;

@Service
public class GoodsServiceImpl implements GoodsService {
	
	@Autowired
	private GoodsMapper goodsMapper;
	
	public void insert(Commodity obj) {
		goodsMapper.insertGoods(obj);
	}

}
