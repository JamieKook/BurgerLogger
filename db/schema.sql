DROP DATABASE IF EXISTS burger_logger_db; 

CREATE DATABASE burger_logger_db; 
USE burger_logger_db; 

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    eaten BOOLEAN DEFAULT false
); 