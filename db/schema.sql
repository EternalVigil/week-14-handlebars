CREATE DATABASE burger_db;
use burger_db;

CREATE TABLE burgers(
id INTEGER(10) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50),
devoured BOOL,
date DATE,
PRIMARY KEY(id)
);