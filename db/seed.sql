create table chat_user (
user_id serial primary key,
email varchar(200),
username varchar(100),
password varchar(800)
);

create table ecom_brand(
brand_id serial primary key,
brand_title varchar(300),
product_type varchar(400)
);

create table ecom_product(
product_id serial primary key,
pro_title varchar(300),
description text,
price integer,
pro_img text,
brand_id integer REFERENCES ecom_brand(brand_id)
);