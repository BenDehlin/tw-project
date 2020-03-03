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

const SmallVillage = ({ village, setCurrentVillage, i }) => {
  const { smallVillageStyle } = useStyles()
  // console.log({village})
  // console.log("x: " + village.x_coord)
  // console.log("y: " + village.y_coord)
  return (
    <div onClick={() => setCurrentVillage(i)} className={smallVillageStyle}>
      {village.village_name} [{village.x_coord}, {village.y_coord}]
    </div>
  )
}

export default SmallVillage
