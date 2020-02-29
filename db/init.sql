DROP TABLE IF EXISTS tw_player_city_link;
DROP TABLE IF EXISTS tw_city_unit_link;
DROP TABLE IF EXISTS tw_buildings;
DROP TABLE IF EXISTS tw_units;
DROP TABLE IF EXISTS tw_cities;
DROP TABLE IF EXISTS tw_players;

CREATE TABLE tw_players
(player_id SERIAL PRIMARY KEY,
username VARCHAR(150) NOT NULL,
email VARCHAR(250) NOT NULL,
hash VARCHAR(2500) NOT NULL);

CREATE TABLE tw_cities
(city_id SERIAL PRIMARY KEY,
player_id INTEGER REFERENCES tw_players(player_id),
city_name VARCHAR(150) NOT NULL,
city_image VARCHAR(250));

CREATE TABLE tw_buildings
(building_id SERIAL PRIMARY KEY,
building_name VARCHAR(150) NOT NULL,
building_max_level INTEGER NOT NULL,
building_image VARCHAR(250));

CREATE TABLE tw_units
(unit_id SERIAL PRIMARY KEY,
unit_name VARCHAR(150) NOT NULL,
unit_max_level INTEGER NOT NULL,
attack INTEGER NOT NULL,
defense INTEGER NOT NULL,
health INTEGER NOT NULL,
unit_image VARCHAR(250));

CREATE TABLE tw_player_city_link
(player_city_link_id SERIAL PRIMARY KEY,
player_id INTEGER REFERENCES tw_players(player_id),
city_id INTEGER REFERENCES tw_cities(city_id));

CREATE TABLE tw_city_unit_link
(city_unit_link_id SERIAL PRIMARY KEY,
city_id INTEGER REFERENCES tw_cities(city_id),
unit_id INTEGER REFERENCES tw_units(unit_id),
count INTEGER);