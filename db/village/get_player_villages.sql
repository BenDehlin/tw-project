SELECT v.village_id, v.player_id, v.village_name, v.village_image FROM tw_villages v
JOIN tw_players p ON (p.player_id = v.player_id)
WHERE p.player_id = $1;