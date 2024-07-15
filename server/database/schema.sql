-- SQLBook: Code
create table roles (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL
);

create table users (
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Foreign Key (roles_id) REFERENCES roles (id),
    roles_id INT NOT NULL,
    firstname VARCHAR(80) NOT NULL,
    lastname VARCHAR(80) NOT NULL,
    avatar LONGTEXT,
    points INT,
    city VARCHAR(80),
    email VARCHAR(255) NOT NULL unique,
    password VARCHAR(255) NOT NULL
);

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
) ;

-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (1, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Art urbain de Paris', 'Une magnifique pièce de street art au cœur de Paris.', 'nAfiP', 75.2297244, -25.7825577, 1);
-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (1, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Mur de Graffiti', 'Un mur couvert de graffitis vibrants et colorés.', 'BTdMUEyFha', -81.4485227, 154.2849801, 1);
-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (1, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Fresque colorée', 'Une fresque colorée qui illumine la rue.', 'XQfuPkwo', -70.594771, -173.277025, 1);
-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (1, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Tag artistique', 'Un tag artistique sur un vieux bâtiment.', 'AUCWV', 56.3639157, -142.8291898, 1);