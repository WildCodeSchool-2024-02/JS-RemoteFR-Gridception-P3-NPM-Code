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
VALUES 
-- Créer l'admin et quelques utilisateurs 
(1,'ELGOAT' ,'toto', 'le GOAT', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Partout', 'toto@toto.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4'), 
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

INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) 
VALUES
-- Oeuvres qui ne sont pas encore validés 
(5, 'https://www.visitelyon.fr/wp-content/uploads/2021/03/mur-canuts-croix-rousse-lyon-4-scaled.jpeg', 'Le Mur des Canuts', 'Une célèbre fresque murale à Lyon représentant l\'histoire et les habitants de la ville.', 'Inconnu', 45.763, 4.831, 0),
(2, 'https://nimesartethistoire.fr/fileadmin/ciap/visiter-nimes/2022/Parcours-street-art/crocodile-iseckte.jpg', 'Croco dingo', 'Un crocodile multicolore qui fûme tranquille', 'Inconnu', 43.837, 4.360, 0),
(4, 'https://image.over-blog.com/L68LXejA0etGM1Wz3TcJoon7GYQ=/filters:no_upscale()/image%2F1406669%2F20240307%2Fob_0100af_street-art-toulouse-honck-avenue-jean.jpg', 'La fille aux bulles', 'Une petite fille qui aime faire des bulles', 'Inconnu', 43.604, 1.444, 0),
(3, 'https://g6i7g8i8.rocketcdn.me/wp-content/uploads/2022/05/3-Tours_a_velo_Street-Art-Credit_ADT_Touraine_JC-Coutand-2032-30-540x380.jpg', 'Les cheveux', 'Magnifique street art pour lequel l\artiste à utiliser un arbre pour compléter son oeuvre', 'Inconnu', 47.390, 0.688, 0),
(6, 'https://cdn-s-www.ledauphine.com/images/d46901bd-b032-47c0-a0f5-1235993a98cd/NW_raw/archives-photo-le-dl-eloise-fine-1695560497.jpg', 'Dame nature', 'Un street art qui représente Dame nature qui est contempler par un randonneur', 'Inconnu', 44.196, 5.944, 0);

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
);

INSERT INTO contacts (fullname, mail, message) 
VALUES 
-- Création de faux messages
('Toto le plus beau', 'Toto@hotmail.com', 'Bonjour, votre site est super ! Bravo ! '),
('Amelita','amelita@gmail.com','Bonjour je veut utiliser la commande spéciale ALT + F4 mais ça ne fonctionne pas'),
('xXxDarkGrandMerexXx', 'meregrand@gmail.com', 'Vous pouvez rebrancher la box SVP?');
