-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create a database called burgers_db --
CREATE DATABASE burgers_db;
-- Use programming db for the following statements --
USE burgers_db;


-- Burgers table with columns --

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE

);