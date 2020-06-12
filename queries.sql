CREATE TABLE company(id INT NOT NULL AUTO_INCREMENT,
    -> name VARCHAR(100),
    -> email VARCHAR(50),
    -> location VARCHAR(20),
    -> started_at DATE,
    -> username VARCHAR(20),
    -> password VARCHAR(20),
    -> PRIMARY KEY(id)
    ->);

CREATE TABLE user(id INT NOT NULL AUTO_INCREMENT,
    -> first_name VARCHAR(30),
    -> last_name VARCHAR(30),
    -> gender VARCHAR(20),
    -> email VARCHAR(20),
    -> dob DATE,
    -> username VARCHAR(20),
    -> status VARCHAR(20)
    -> password VARCHAR(20),
    -> PRIMARY KEY(id));

create table category(id INT NOT NULL AUTO_INCREMENT,
    -> category VARCHAR(30),
    -> PRIMARY KEY(id)
    -> );

create table ticket(id INT NOT NULL AUTO_INCREMENT, title VARCHAR(200),
    -> description VARCHAR(300),
    -> user_id INT,
    -> category_id INT,
    -> PRIMARY KEY(id)
    -> FOREIGN KEY(user_id) REFERENCES user(id),
    -> FOREIGN KEY(category_id) REFERENCES category(id)
    -> );
