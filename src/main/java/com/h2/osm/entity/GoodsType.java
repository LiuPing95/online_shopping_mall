package com.h2.osm.entity;

public class GoodsType {

	private Integer id;
	private String name;
	private String des;
	private Integer status;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDes() {
		return des;
	}
	public void setDes(String des) {
		this.des = des;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "GoodsType [id=" + id + ", name=" + name + ", des=" + des + ", status=" + status + "]";
	}
	
}
