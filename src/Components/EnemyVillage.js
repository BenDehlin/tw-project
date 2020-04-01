import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  enemyVillageStyle: {}
})

const EnemyVillage = ({ x_coord, y_coord, player_name, village_name }) => {
  const { enemyVillageStyle } = useStyles()
  return (
    <div className={enemyVillageStyle}>
      <h1>{village_name}</h1>
      <h2>
        X: {x_coord} Y: {y_coord}
      </h2>
      <h3>Distance: TBD</h3>
    </div>
  )
}

export default EnemyVillage
