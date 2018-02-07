# Implicitly create the user and then drop the user.
DROP DATABASE IF EXISTS `bookstore`;
CREATE DATABASE IF NOT EXISTS `book_app_db`;

DROP USER IF EXISTS 'book_app_sys'@'localhost';
create USER 'book_app_sys'@'localhost' IDENTIFIED BY 'book_app_sys';
GRANT ALL PRIVILEGES ON `book_app_db` . * TO 'book_app_sys'@'localhost';