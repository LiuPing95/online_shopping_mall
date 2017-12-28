package com.h2.osm.entity;

public class Commodity {

	private Integer id;
	private Integer tid;//typeId
	private Integer sid;//storeId
	private String name;
	private String des;
	private Double price;
	private Integer inventory;//库存量
	private String picture;
	private Integer status;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getTid() {
		return tid;
	}
	public void setTid(Integer tid) {
		this.tid = tid;
	}
	public Integer getSid() {
		return sid;
	}
	public void setSid(Integer sid) {
		this.sid = sid;
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
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Integer getInventory() {
		return inventory;
	}
	public void setInventory(Integer inventory) {
		this.inventory = inventory;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Commodity [id=" + id + ", tid=" + tid + ", sid=" + sid + ", name=" + name + ", des=" + des + ", price=" + price + ", inventory="
				+ inventory + ", picture=" + picture + ", status=" + status + "]";
	}
	
}
