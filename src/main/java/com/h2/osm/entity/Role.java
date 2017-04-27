package com.h2.osm.entity;

/**
 * 管理员角色实体类 
 */
public class Role{
	
	private Integer id;  //角色编号
	private String name;  //角色名称
	private String des;  //角色描述
	private Integer status;  //状态
	
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

	public String getStatusStr() {
		if(status==1){
			return "正常";
		}else {
			return "已禁用";
		}
	}
	
}
