SELECT * FROM tw_units u
JOIN tw_village_unit_link vu ON (u.unit_id = vu.unit_id)
WHERE vu.village_id = $1
ORDER BY u.unit_id ASC;