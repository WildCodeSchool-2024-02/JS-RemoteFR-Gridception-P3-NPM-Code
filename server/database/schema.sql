-- SQLBook: Code
create table localisations (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  latitude INT NOT NULL,
  longitude INT NOT NULL
);

create table street_arts (
  id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (localisations_id) REFERENCES localisations(id),
  localisations_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  artist VARCHAR(80),
  is_valid BOOLEAN NOT NULL
);
create table users (
  id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  avatar VARCHAR(255),
  points INT,
  city VARCHAR(80) NOT NULL,
  email VARCHAR(255) NOT NULL unique,
  password VARCHAR(50) NOT NULL,
  is_admin BOOLEAN
);
create table pictures (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    URL VARCHAR(255) NOT NULL,
    DATE DATETIME,
    is_valid BOOLEAN
);

create table street_arts_users (
  id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (street_arts_id) REFERENCES street_arts(id),
  FOREIGN KEY (users_id) REFERENCES users(id),
  users_id INT NOT NULL,
  street_arts_id INT NOT NULL
);

create table street_arts_pictures (
  id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (street_arts_id) REFERENCES street_arts(id),
  FOREIGN KEY (pictures_id) REFERENCES pictures(id),
  street_arts_id INT NOT NULL,
  pictures_id INT NOT NULL
);