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
    -> password VARCHAR(20),
    -> PRIMARY KEY(id));

CREATE TABLE tickets(id INT NOT NULL AUTO_INCREMENT,
    -> title VARCHAR(200),
    -> description VARCHAR(300),
    -> user_id INT,
    -> category VARCHAR(20),
    -> company_id INT,
    -> PRIMARY KEY(id),
    -> FOREIGN KEY(user_id) REFERENCES user(id),
    -> FOREIGN KEY(company_id) REFERENCES company(id)
    -> );

