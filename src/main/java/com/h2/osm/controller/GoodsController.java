package com.h2.osm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.h2.osm.entity.Commodity;
import com.h2.osm.service.GoodsService;

@Controller
@RequestMapping("/goods")
public class GoodsController {

	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping("insert")
	@ResponseBody
	public boolean insert(Commodity obj) {
//		goodsService.insert(obj);
		return true;
	}
	
}
