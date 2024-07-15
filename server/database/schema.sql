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
VALUES (1,'ELGOAT' ,'toto', 'le GOAT', 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png', 0, 'Partout', 'toto@toto.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

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






-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (2, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Art urbain de Paris', 'Une magnifique pièce de street art au cœur de Paris.', 'nAfiP', 75.2297244, -25.7825577, 0);
-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (2, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Mur de Graffiti', 'Un mur couvert de graffitis vibrants et colorés.', 'BTdMUEyFha', -81.4485227, 154.2849801, 0);
-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (1, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Fresque colorée', 'Une fresque colorée qui illumine la rue.', 'XQfuPkwo', -70.594771, -173.277025, 0);


-- INSERT INTO street_arts (users_id, file, title, description, artist, latitude, longitude, is_valid) VALUES (1, 'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_1280.jpg', 'Fresque coorée', 'Une freque colorée qui illumine la rue.', 'XQfuPkwo', -70.594771, -173.277025, 0);




-- INSERT INTO users (roles_id, pseudo, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'elcrakita','Alice', 'Dupont', 'https://randomuser.me/api/portraits/women/1.jpg', 0, 'Paris', 'alice.dupont@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Bob', 'Martin', 'https://randomuser.me/api/portraits/men/2.jpg', 0, 'Lyon', 'bob.martin@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Clara', 'Bernard', 'https://randomuser.me/api/portraits/women/3.jpg', 0, 'Marseille', 'clara.bernard@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'David', 'Lefevre', 'https://randomuser.me/api/portraits/men/4.jpg', 0, 'Toulouse', 'david.lefevre@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Emma', 'Moreau', 'https://randomuser.me/api/portraits/women/5.jpg', 0, 'Nice', 'emma.moreau@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'François', 'Michel', 'https://randomuser.me/api/portraits/men/6.jpg', 0, 'Nantes', 'francois.michel@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Gabrielle', 'Garcia', 'https://randomuser.me/api/portraits/women/7.jpg', 0, 'Strasbourg', 'gabrielle.garcia@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Hugo', 'Rousseau', 'https://randomuser.me/api/portraits/men/8.jpg', 0, 'Bordeaux', 'hugo.rousseau@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Isabelle', 'Perrin', 'https://randomuser.me/api/portraits/women/9.jpg', 0, 'Montpellier', 'isabelle.perrin@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Jacques', 'Fournier', 'https://randomuser.me/api/portraits/men/10.jpg', 0, 'Rennes', 'jacques.fournier@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');

-- INSERT INTO users (roles_id, firstname, lastname, avatar, points, city, email, password)
-- VALUES (2, 'Julie', 'Dumont', 'https://randomuser.me/api/portraits/women/11.jpg', 0, 'Lille', 'julie.dumont@example.com', '$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4');


-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Jean Dupont', 'jean.dupont@example.com', 'Bonjour, je voudrais avoir plus d\'informations sur vos services. Merci.');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Marie Curie', 'marie.curie@example.com', 'Bonsoir, est-il possible de prendre rendez-vous pour une consultation ?');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Luc Martin', 'luc.martin@example.com', 'Salut, j\'ai essayé de me connecter à mon compte mais cela ne fonctionne pas. Pouvez-vous m\'aider ?');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Sophie Bernard', 'sophie.bernard@example.com', 'Bonjour, je suis intéressée par vos tarifs. Pouvez-vous me les envoyer ?');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Paul Durand', 'paul.durand@example.com', 'Bonjour, j\'aimerais savoir si vous proposez des formations en ligne.');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Emma Moreau', 'emma.moreau@example.com', 'Bonjour, est-ce que vous avez une offre spéciale pour les étudiants ?');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Julien Lefevre', 'julien.lefevre@example.com', 'Bonsoir, je n\'arrive pas à trouver l\'information sur votre site. Pouvez-vous m\'aider ?');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Nathalie Petit', 'nathalie.petit@example.com', 'Bonjour, j\'ai une question concernant votre politique de confidentialité.');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Antoine Rousseau', 'antoine.rousseau@example.com', 'Salut, j\'aimerais en savoir plus sur vos événements à venir.');

-- INSERT INTO contacts (fullname, mail, message)
-- VALUES ('Isabelle Fournier', 'isabelle.fournier@example.com', 'Bonsoir, pourriez-vous me dire comment annuler mon abonnement ?');

