--角色信息表(区分是否管理员)
create table role(
	id  number(10) primary key,
	name  varchar2(100) not null unique,
	mark  varchar2(200),
	status  number(2)
);
create sequence seq_role start with 10001;

--管理员信息表
create table adminInfo(
	id number(10) primary key,
	rid number(10) constraints FK_role_id references role(id),
	name varchar2(100),
	pwd varchar2(100),
	email varchar2(100) not null unique,
	telephone varchar2(15) not null unique,
	photo varchar2(400),
	status number(2)--状态：0待审核1审核未通过2已审核,可以正常登录3冻结
);
create sequence seq_adminInfo start with 10001;

--用户信息表
create table userInfo(
	id number(10) primary key,
	nickname varchar2(100) not null unique,--昵称姓名
	name varchar2(100),
	pwd varchar2(100),
	email varchar2(100) not null unique,
	telephone varchar2(15) not null unique,
	photo varchar2(400),
	province varchar2(100),
	city varchar2(100),
	area varchar2(100),
	credit number(10,2),--积分
	status number(2),--会员状态：0会员1：普通用户
	des varchar2(200)--说明
);
create sequence seq_userInfo start with 10001;

--商品类型
create table type(
	id number(10) primary key,
	name varchar2(100) not null unique,--类型名称
	des varchar2(200),--类型描述
	status number(2)--类型的状态（1、上架1、下架）
);
create sequence seq_type start with 10001;

--商店信息
create table store(
	id number(10) primary key,
	name varchar2(20) not null unique,
	telephone varchar2(50),
	province varchar2(100),
	city varchar2(100),
	area varchar2(100),--地区
	location varchar2(400),--详细地址
	status number(2),--状态(0:待审核1:审核未通过2:通过3:释放(店铺已被关闭))
	info clob
);
create sequence seq_store start with 10001;

--商品表
create table commodity(
	id number(10) primary key,
	name varchar2(200),
	des varchar2(200),--描述
	price number(10,2),--价格
	picture varchar2(2000),--照片
	status number(2)--状态(上架，下架)
);
create sequence seq_commodity start with 10001;

--商品类型表
create table commodity_type(
	id number(10) primary key,
	tid number(10),--类型id
	cid number(10)--商品id
);
create sequence seq_commodity_type start with 10001;

--活动表
create table activity(
	id number(10) primary key,
	discount number(10,2),--折扣价
	title varchar2(200),
	startdate date,
	enddate date,
	personnum number(2),--几人餐
	content clob--活动介绍
);
create sequence seq_activity start with 10001;

--商品活动联系表
create table commodity_activity(
	id number(10) primary key,
	cid number(10),--商品id
	aid number(10)--活动id
);
create sequence seq_commodity_activity start with 10001;

--订单表
create table orders(
	id varchar2(200) primary key,--订单编号
	quatity number(10),--商品份数
	total number(10,8),--订单总额
	status number(2),--订单状态
	odate date--订单日期
);
create sequence seq_order start with 10001;

--商店订单联系表
create table store_order(
	id number(10) primary key,
	oid varchar2(200),
	sid number(10)
);
create sequence seq_store_order start with 10001;

--消息表
create table message(
	mid number(10) primary key,
	title varchar2(200),
	content varchar2(4000),
	mdate date
);
create sequence seq_message start with 10001;

--角色信息表(区分是否管理员)
create table role(
       id number(10) primary key,
       name varchar2(100) not null unique,
       des varchar2(200),
       status number(2)
);
create sequence seq_role start with 10001;

--管理员信息表
create table adminInfo(
       id number(10)  primary key,
       rid number(10) constraints FK_role_id references role(id),
       name varchar2(100),
       pwd varchar2(100),
       email varchar2(100) not null unique,
       telephone varchar2(15) not null unique,
       photo varchar2(400),
       status number(2)   --状态：0待审核   1审核未通过  2已审核,可以正常登录  3冻结
);
create sequence seq_adminInfo start with 10001;

--用户信息表
create table userInfo(
       id number(10) primary key,
       nickname varchar2(100) not null unique,  --昵称姓名
       name varchar2(100),
       pwd varchar2(100),
       email varchar2(100) not null unique,
       telephone varchar2(15) not null unique,
       photo varchar2(400),
       province varchar2(100),
       city varchar2(100),
       area varchar2(100),
       credit number(10,2),  --积分
       status number(2),     --会员状态：0 会员   1：普通用户
       des varchar2(200)   --说明 
);
create sequence seq_userInfo start with 10001;

--商品类型
create table type(
       id number(10) primary key,
       name varchar2(100) not null unique,    --类型名称
       des varchar2(200), --类型描述
       status number(2)   --类型的状态（1、上架   1、下架） 
);
create sequence seq_type start with 10001;

--商店信息
create table store(
       id number(10) primary key,
       name varchar2(20) not null unique,
       telephone varchar2(50),    
       province varchar2(100),    
       city varchar2(100),
       area varchar2(100),        --地区
       location varchar2(400),    --详细地址
       status number(2),          --状态(0:待审核  1:审核未通过  2:通过  3:释放(店铺已被关闭))
       info clob
);
create sequence seq_store start with 10001;

--商品表
create table commodity(
       id number(10) primary key,
       tid number(10) constraints FK_type_id references type(id),  --类型id
       sid number(10) constraints FK_store_id references store(id), --所属店铺编号
       name varchar2(200),
       des varchar2(200),    --描述
       price number(10,2),   --价格
       inventory number(4),  --库存量
       picture varchar2(2000),    --照片
       status number(2)           --状态(上架，下架)
);
create sequence seq_commodity start with 10001;

--活动表
create table activity(
       id number(10) primary key,
       cid number(10) constraints FK_commodity_id references commodity(id),  --商品编号
       discount number(10,2), --折扣价
       title varchar2(200),
       startdate date,
       enddate date,
       personnum number(2),  --几人餐
       content clob  --活动介绍
);
create sequence seq_activity start with 10001;

--订单表
create table orders(
       id varchar2(200) primary key,  --订单编号
       sid number(10) constraints FK_store_id references store(id),  --店铺编号
       quatity number(10), --商品份数
       total number(10,8), --订单总额
       status number(2),  --订单状态
       odate date  --订单日期
);
create sequence seq_order start with 10001;

--消息表
create table message(
       mid number(10) primary key,  
       title  varchar2(200), 
       content varchar2(4000),
       mdate date
);
create sequence seq_message start with 10001;