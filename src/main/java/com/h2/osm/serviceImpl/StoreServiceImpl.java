package com.h2.osm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.h2.osm.entity.Store;
import com.h2.osm.mapper.StoreMapper;
import com.h2.osm.service.StoreService;

@Service
public class StoreServiceImpl implements StoreService {

	@Autowired
	private StoreMapper storeMapper;
	
	public void insertStore(Store obj) {
		storeMapper.insertStore(obj);
	}

	public List<Store> getStores() {
		return storeMapper.getStores();
	}

}
