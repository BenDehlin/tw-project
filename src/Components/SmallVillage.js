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
  const {village_id, village_name, x_coord, y_coord} = village
  return (
    <div onClick={() => setVillage(village_id)} className={smallVillageStyle} style={{backgroundColor: village_id === activeVillage.village_id && 'green'}}>
      {village_name} [{x_coord}, {y_coord}]
    </div>
  )
}

export default SmallVillage
