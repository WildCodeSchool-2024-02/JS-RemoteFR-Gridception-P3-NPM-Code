-- SQLBook: Code
create table roles (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL
);

create table users (
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Foreign Key (roles_id) REFERENCES roles (id),
    roles_id INT NOT NULL,
    pseudo VARCHAR(80) NOT NULL,
    firstname VARCHAR(80) NOT NULL,
    lastname VARCHAR(80) NOT NULL,
    avatar LONGTEXT,
    points INT,
    city VARCHAR(80),
    email VARCHAR(255) NOT NULL unique,
    password VARCHAR(255) NOT NULL
);

INSERT INTO roles (name)
VALUES ('Admin'), ('Utilisateur');

INSERT INTO users (roles_id, pseudo, firstname, lastname, avatar, points, city, email, password)
VALUES (1,'ELGOAT' ,'toto', 'le GOAT', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Partout', 'toto@toto.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4'), 
(2, 'Le J', 'Nicolas', 'Juchereau', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Nîmes', 'nicoj@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4'),
(2, 'Pedro', 'Pierre', 'Delarocque', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Tours', 'pedro@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4'),
(2, 'MegMayo', 'Mégane', 'Authemayou', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Tours', 'meg@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4'),
(2, 'Le G', 'Nicolas', 'Gerin', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Les Grottes', 'nicog@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4'),
(2, 'XamTV', 'Maxime', 'Maussion', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Sisteron', 'max@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

create table street_arts (
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users (id),
    users_id INT NOT NULL,
    file VARCHAR(255) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    artist VARCHAR(80),
    latitude DECIMAL(10, 7) NOT NULL,
    longitude DECIMAL(10, 7) NOT NULL,
    is_valid BOOLEAN NOT NULL
);

create table pictures (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Foreign Key (street_arts_id) REFERENCES street_arts (id),
    street_arts_id INT NOT NULL,
    name VARCHAR(255),
    url VARCHAR(255) NOT NULL,
    date DATETIME,
    is_valid BOOLEAN
);

create table categories (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL
);

create table street_arts_categories (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (street_arts_id) REFERENCES street_arts (id),
    FOREIGN KEY (categories_id) REFERENCES categories (id),
    categories_id INT NOT NULL,
    street_arts_id INT NOT NULL
);

CREATE TABLE contacts (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fullname VARCHAR(155) NOT NULL,
  mail VARCHAR(80) NOT NULL,
  message TEXT NOT NULL
)

