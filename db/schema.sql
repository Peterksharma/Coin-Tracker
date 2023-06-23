DROP DATABASE IF EXISTS coins_db;

CREATE DATABASE coins_db;

USE coins_db;

CREATE TABLE coins (
    coin_id INT NOT NULL,
    coin_name VARCHAR (40) NOT NULL,
    coin_type VARCHAR (30) NOT NULL,
    coin_denomination INT NOT NULL,
    year_made INT NOT NULL,
    mint_mark VARCHAR (30) NOT NULL,
    FOREIGN KEY (users)
);

CREATE TABLE users (
    user_id INT NOT NULL,
    username VARCHAR (30) NOT NULL,
    user_pass VARCHAR (10) NOT NULL,
    PRIMARY KEY (user_id),
);