# Books review App

## Overview

Application to summarise your opinion on a book.

You can add few inputs:

- Title
- Rating
- Number of Pages
- Author
- Summary

Is built with React, PostgreSQL, redux and Express.

My primary goal was to experiment with redux and create an app that let me remind past lectures.

## How to run the project

After cloning the project:

Install all dependencies in server and client

```
cd client
npm install 
cd server
npm install
```

Install postgreSQL and add the following database / Tables

```
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
```

Add enviroment variables

```
JWT_KEY / Jsonwebtoken password
JWT_KEY_REFRESH / Jsonwebtoken refresh password
PG_USER / Postgres User
PG_PASSWORD / Postgres Password


```

Run client and server

```
cd client 
npm run dev
cd server
npm run dev / Default on port 3006
```