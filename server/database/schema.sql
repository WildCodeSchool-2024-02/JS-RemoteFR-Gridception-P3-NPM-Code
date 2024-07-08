create table roles (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL
);
create table users (
  id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Foreign Key (roles_id) REFERENCES roles(id),
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
  FOREIGN KEY (users_id) REFERENCES users(id),
  users_id INT NOT NULL,
  file VARCHAR(255) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  artist VARCHAR(80),
  latitude INT NOT NULL,
  longitude INT NOT NULL,
  is_valid BOOLEAN NOT NULL
);

create table pictures (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Foreign Key (street_arts_id) REFERENCES street_arts(id),
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
  FOREIGN KEY (street_arts_id) REFERENCES street_arts(id),
  FOREIGN KEY (categories_id) REFERENCES categories(id),
  categories_id INT NOT NULL,
  street_arts_id INT NOT NULL
);


CREATE TABLE contacts (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fullname VARCHAR(155) NOT NULL,
  mail VARCHAR(80) NOT NULL,
  message TEXT NOT NULL

)