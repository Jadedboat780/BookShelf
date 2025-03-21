CREATE TABLE Users
(
    id       SERIAL PRIMARY KEY,
    login    VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR            NOT NULL,
    email    VARCHAR(150)       NOT NULL
);

CREATE TABLE Books
(
    id               SERIAL PRIMARY KEY,
    user_id          SERIAL REFERENCES Users (id),
    title            VARCHAR(40) UNIQUE NOT NULL,
    author           VARCHAR(40) UNIQUE NOT NULL,
    category         VARCHAR(40),
    publication_year SERIAL,
    description      VARCHAR(100)       NOT NULL DEFAULT '',
    photo_link       VARCHAR(255) NOT NULL
);


CREATE TABLE WishList
(
    id      SERIAL PRIMARY KEY,
    user_id SERIAL REFERENCES Users (id),
    book_id SERIAL REFERENCES Books (id)
);
