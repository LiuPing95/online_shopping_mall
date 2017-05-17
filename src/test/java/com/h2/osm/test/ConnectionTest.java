package com.h2.osm.test;
import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.h2.osm.entity.Commodity;
import com.h2.osm.mapper.GoodsMapper;
import com.h2.osm.service.GoodsService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class ConnectionTest {

	@Autowired
	private DataSource dataSource;
	
	@Autowired
	private GoodsService goodsService;
	
	@Test
	public void testConnection() throws SQLException {
		Connection con = dataSource.getConnection();
		System.out.println(con);
	}
	
	@Test
	public void testAddGoods() {
//		Commodity obj = new Commodity();
//		obj.set
//		goodsService.insert(obj);
	}
	
}
