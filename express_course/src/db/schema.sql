CREATE DATABASE if NOT EXISTS SampleAPP;
-- Every time when I want to start a database, I should "USE"
USE SampleAPP;
-- Delete table
-- DROP TABLE "table_name"

CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    hobby TEXT NOT NULL
);

INSERT INTO users (name, hobby)
VALUES
('Leo', 'Programming'),
('Elaine', 'Reading');