-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS mangaka;

CREATE TABLE mangaka (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    series TEXT NOT NULL
);

DROP TABLE IF EXISTS dog;

CREATE TABLE dog (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    favtoy TEXT NOT NULL
);

DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    genre TEXT NOT NULL
);

DROP TABLE IF EXISTS foods

CREATE TABLE foods (

 id BIGINT GENERATED ALWAYS AS IDENTITY,
    item TEXT NOT NULL,
    origin TEXT NOT NULL
);
