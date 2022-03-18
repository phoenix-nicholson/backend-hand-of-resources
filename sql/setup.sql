-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS mangaka;

CREATE TABLE mangaka (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    series TEXT NOT NULL
)

DROP TABLE IF EXISTS miklo;

CREATE TABLE miklo (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    favToy TEXT NOT NULL
)