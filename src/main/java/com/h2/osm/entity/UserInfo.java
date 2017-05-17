package com.h2.osm.entity;

import java.io.Serializable;

/**
 * 用户信息表
 */
public class UserInfo implements Serializable {

	private static final long serialVersionUID = 1L;
	private String id;  
	private String name; 
	private String nickName;
	private String pwd;
	private String email;
	private String telephone;
	private String photo;
	private String province;
	private String city;
	private String area;
	private String credit;
	private Integer status; //状态(会员/普通用户)：0待审核   1审核未通过  2已审核,可以正常登录  3冻结
	private String des;  //描述
	
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

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
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
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCredit() {
		return credit;
	}

	public void setCredit(String credit) {
		this.credit = credit;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getDes() {
		return des;
	}

	public void setDes(String des) {
		this.des = des;
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
}