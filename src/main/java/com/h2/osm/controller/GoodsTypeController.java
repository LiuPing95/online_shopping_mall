package com.h2.osm.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.h2.osm.entity.GoodsType;
import com.h2.osm.service.GoodsTypeService;

@Controller
@RequestMapping("/goodsType")
public class GoodsTypeController {

	@Autowired
	private GoodsTypeService typeService;
	
	@RequestMapping("list")
	@ResponseBody
	public List<GoodsType> list() {
		return typeService.getTypes();
	}
	
	@RequestMapping("del")
	@ResponseBody
	public boolean del(String tid) {
		String[] ids = tid.split(",");
		List<Integer> idList = new ArrayList<Integer>();
		for (String id : ids) {
			idList.add(Integer.parseInt(id));
		}
		typeService.del(idList);
		return true;
	}
	
	@RequestMapping("add")
	@ResponseBody
	public boolean add(GoodsType obj) {
		System.out.println(obj);
		typeService.insert(obj);
		return true;
	}
	
}
