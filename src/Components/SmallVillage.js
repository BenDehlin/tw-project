import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  smallVillageStyle: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: "black",
    color: "white",
    cursor: "pointer"
  }
})

const SmallVillage = ({ village, setVillage, activeVillage }) => {
  const { smallVillageStyle } = useStyles()
  return (
    <div onClick={() => setVillage(village.village_id)} className={smallVillageStyle} style={{backgroundColor: village.village_id === activeVillage.village_id && 'green'}}>
      {village.village_name} [{village.x_coord}, {village.y_coord}]
    </div>
  )
}

export default SmallVillage
