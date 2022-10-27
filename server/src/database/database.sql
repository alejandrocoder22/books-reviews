CREATE DATABASE books_reviews;

CREATE TABLE users (
    user_id SMALLSERIAL UNIQUE PRIMARY KEY,
    username VARCHAR(25) UNIQUE,
    password VARCHAR (300),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)

CREATE TABLE reviews (
    review_id SMALLSERIAL UNIQUE PRIMARY KEY,
    stars smallint, 
    date date,
    title VARCHAR(100),
    pages SMALLINT,
    author VARCHAR(50),
    summary VARCHAR(1000),
    user_id SMALLINT REFERENCES users(user_id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)