package com.h2.osm.entity;

import java.io.Serializable;

/**
 * 用户信息表
 */
public class AdminInfo implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String id;
	private String rid;
	private String name; 
	private String pwd;
	private String email;
	private String telephone;
	private String photo;
	private Integer status; //状态：0待审核   1审核未通过  2已审核,可以正常登录  3冻结
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getPhoto() {
		if(photo==null || "".equals(photo)){
			return "images/zanwu.jpg";
		}else{
			return photo;
		}
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getPhotos(){
		if(photo==null || "".equals(photo)){
			return "images/zanwu.jpg";
		}else{
			return photo;
		}
	}
	
	public String getStatusStr() {
		//0来审核   1审核未通过  2已审核,可以正常登录  3冻结
		if(status==0){
			return "来审核";
		}else if(status==1){
			return "审核未通过";
		}else if(status==2){
			return "已审核,可以正常登录";
		}else if(status==3){
			return "冻结";
		}
		return "账号异常";
	}

	public String getRid() {
		return rid;
	}

	public void setRid(String rid) {
		this.rid = rid;
	}
}