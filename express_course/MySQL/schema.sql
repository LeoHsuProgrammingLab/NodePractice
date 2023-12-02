CREATE DATABASE notes_app;
-- Every time when I want to start a database, I should "USE"
USE notes_app;
-- Delete table
-- DROP TABLE "table_name"

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES
('My First Note', 'A note about something'),
('My Second Note', 'A note about something else');