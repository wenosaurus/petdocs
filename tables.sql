CREATE TABLE IF NOT EXISTS owner (
	id SERIAL PRIMARY KEY,
	name TEXT,
	email TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS pet (
	id SERIAL PRIMARY KEY,
	name TEXT,
	type TEXT,
	gender TEXT,
	birthdate DATE,
	weight INTEGER,
	img TEXT,
	owner_id INTEGER
);

CREATE TABLE IF NOT EXISTS vet (
	id SERIAL PRIMARY KEY,
	name TEXT,
	email TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS file (
	id SERIAL PRIMARY KEY,
	name TEXT,
	date DATE,
	vet_id INTEGER,
	pet_id INTEGER
);

CREATE TABLE IF NOT EXISTS patient (
	id SERIAL PRIMARY KEY,
	vet_id INTEGER,
	pet_id INTEGER,
	owner_id INTEGER
);

CREATE TABLE IF NOT EXISTS ownership (
	id SERIAL PRIMARY KEY,
	owner_id INTEGER,
	pet_id INTEGER
);