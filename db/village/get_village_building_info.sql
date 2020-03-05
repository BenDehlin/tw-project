SELECT * FROM tw_buildings b
JOIN tw_village_building_link vb ON (b.building_id = vb.building_id)
WHERE vb.village_id = $1
ORDER BY b.building_id ASC;