SELECT * FROM tw_villages v
LEFT JOIN tw_village_building_link vb ON (v.village_id = vb.village_id)
LEFT JOIN tw_buildings b ON (b.building_id = vb.building_id)
LEFT JOIN tw_village_unit_link vu ON (vu.village_id = v.village_id)
LEFT JOIN tw_units u ON (u.unit_id = vu.unit_id)
WHERE v.village_id = $1;