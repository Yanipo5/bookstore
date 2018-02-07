# Implicitly create the user and then drop the user.
DROP DATABASE IF EXISTS `book_app_db`;
CREATE DATABASE IF NOT EXISTS `book_app_db`;

ALTER DATABASE `book_app_db` CHARACTER SET utf8;
ALTER DATABASE `book_app_db` COLLATE utf8_general_ci;

DROP USER IF EXISTS 'book_app_sys'@'localhost';
create USER 'book_app_sys'@'localhost' IDENTIFIED BY 'book_app_sys';
GRANT ALL PRIVILEGES ON `book_app_db` . * TO 'book_app_sys'@'localhost';