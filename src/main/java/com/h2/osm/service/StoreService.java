package com.h2.osm.service;

import java.util.List;

import com.h2.osm.entity.Store;

public interface StoreService {
	
	void insertStore(Store obj);

	List<Store> getStores();
}
