package com.h2.osm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.h2.osm.entity.Store;
import com.h2.osm.service.StoreService;

@Controller
@RequestMapping("/store")
public class StoreController {

	@Autowired
	private StoreService storeService;
	
	@RequestMapping("getStore")
	@ResponseBody
	public List<Store> getStore() {
		return storeService.getStores();
	}
	
}
