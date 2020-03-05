INSERT INTO tw_buildings (building_name, building_max_level)
VALUES ('Barracks', 25),
('Stable', 25),
('Town Center', 25),
('Farm', 25),
('Mine', 25);

INSERT INTO tw_units (name, building_id, attack, defense, health, build_time, pop_cost, gold_cost, move_speed)
VALUES ('Spearman', 1, 3, 6, 50, 360, 1, 10, 360),
('Warrior', 1, 6, 4, 50, 360, 1, 15, 360),
('Light Cav', 2, 8, 3, 150, 360, 2, 30, 180),
('Heavy Cav', 2, 10, 7, 150, 360, 2, 50, 240),
('Knight', 2, 12, 12, 150, 360, 2, 60, 240);

-- test data
INSERT INTO tw_villages (player_id, village_name, x_coord, y_coord)
VALUES (2, 'Village 1', 3, 1);
INSERT INTO tw_village_unit_link (village_id, unit_id, count)
VALUES (1, 1, 10),
(1, 2, 20),
(1, 3, 30),
(1, 4, 40),
(1, 5, 50),
(2, 1, 110),
(2, 2, 120),
(2, 3, 130),
(2, 4, 140),
(2, 5, 150);