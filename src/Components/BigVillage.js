import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  bigVillageStyle: {}
})

const BigVillage = ({village}) => {
  const {bigVillageStyle} = useStyles()
  return (
    <div className={bigVillageStyle}>
      <h1>{village.village_name}</h1>
      <h2>X:{village.x_coord} Y:{village.y_coord} </h2>
      <div>{village.buildings && village.buildings.map(building => (
        <h3 key={building.tw_village_building_link_id}>
          {building.building_name}
        </h3>
      ))} </div>
    </div>
  )
}

export default BigVillage