DROP TABLE IF EXISTS tw_player_village_link;
DROP TABLE IF EXISTS tw_village_unit_link;
DROP TABLE IF EXISTS tw_buildings;
DROP TABLE IF EXISTS tw_units;
DROP TABLE IF EXISTS tw_villages;
DROP TABLE IF EXISTS tw_players;

CREATE TABLE tw_players
(player_id SERIAL PRIMARY KEY,
username VARCHAR(150) NOT NULL,
email VARCHAR(250) NOT NULL,
hash VARCHAR(2500) NOT NULL);

-- CREATE TABLE tw_map
-- (map_id SERIAL PRIMARY KEY,
-- x_coord INTEGER,
-- y_coord INTEGER);

CREATE TABLE tw_villages
(village_id SERIAL PRIMARY KEY,
player_id INTEGER REFERENCES tw_players(player_id),
x_coord INTEGER,
y_coord INTEGER,
village_name VARCHAR(150) NOT NULL,
village_image VARCHAR(250));

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

CREATE TABLE tw_village_building_link
(tw_village_building_link_id SERIAL PRIMARY KEY,
village_id INTEGER REFERENCES tw_villages(village_id),
building_id INTEGER REFERENCES tw_buildings(building_id));

CREATE TABLE tw_village_unit_link
(village_unit_link_id SERIAL PRIMARY KEY,
village_id INTEGER REFERENCES tw_villages(village_id),
unit_id INTEGER REFERENCES tw_units(unit_id),
count INTEGER);