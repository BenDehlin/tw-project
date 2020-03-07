import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  bigVillageStyle: {}
})

const BigVillage = ({ village, history }) => {
  const { bigVillageStyle } = useStyles()
  console.log(village.units)
  return (
    <div className={bigVillageStyle}>
      <h1>{village.village_name}</h1>
      <h2>
        X:{village.x_coord} Y:{village.y_coord}{" "}
      </h2>
      <div>
        <h3>Buildings:</h3>
        {village.buildings &&
          village.buildings.map(building => (
            <div
              onClick={() => {
                history.push(
                  `/village/${building.building_name
                    .split(" ")
                    .join("")
                    .toLowerCase()}`
                )
              }}
            >
              <h4 key={building.tw_village_building_link_id}>
                {building.building_name}
              </h4>
            </div>
          ))}{" "}
      </div>
      <div>
        <h3>Units:</h3>
        {village.units &&
          village.units.map(unit => (
            <h4 key={unit.tw_village_unit_link_id}>
              {unit.name}: {unit.count}
            </h4>
          ))}{" "}
      </div>
    </div>
  )
}

export default BigVillage
