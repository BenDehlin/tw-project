INSERT INTO tw_villages (player_id, village_name, x_coord, y_coord)
VALUES (${player_id}, ${village_name}, ${x_coord}, ${y_coord})
RETURNING village_id;