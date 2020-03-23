import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  bigVillageStyle: {}
})

const BigVillage = ({ village, history }) => {
  const { bigVillageStyle } = useStyles()
  const { village_name, x_coord, y_coord, buildings, units } = village
  return (
    <div className={bigVillageStyle}>
      <h1>{village_name}</h1>
      <h2>
        X:{x_coord} Y:{y_coord}{" "}
      </h2>
      <div>
        <h3>Buildings:</h3>
        {buildings &&
          buildings.map(({ building_name, tw_village_building_link_id }) => (
            <div
              onClick={() => {
                history.push(
                  `/village/${building_name
                    .split(" ")
                    .join("")
                    .toLowerCase()}`
                )
              }}
            >
              <h4 key={tw_village_building_link_id}>{building_name}</h4>
            </div>
          ))}{" "}
      </div>
      <div>
        <h3>Units:</h3>
        {units &&
          units.map(({ tw_village_unit_link_id, name, count }) => (
            <h4 key={tw_village_unit_link_id}>
              {name}: {count}
            </h4>
          ))}{" "}
      </div>
    </div>
  )
}

export default BigVillage
