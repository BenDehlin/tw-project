import React, { useState, useEffect } from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  miniMapStyle: {
    height: 250,
    width: 250,
    backgroundColor: "black",
    color: "white",
    display: "grid",
    cursor: "pointer"
  }
})

const MiniMap = ({ villages, setVillage, currentVillage }) => {
  const [grid, setGrid] = useState([])
  useEffect(() => {
    let genGrid = []
    for (let x = 0; x < 10; x++) {
      genGrid.push([])
      for (let y = 0; y < 10; y++) {
        genGrid[x].push({ x, y, villageHere: false, village_id: null })
      }
    }
    for (let i = 0; i < villages.length; i++) {
        genGrid[villages[i].x_coord][villages[i].y_coord].villageHere = true
        genGrid[villages[i].x_coord][villages[i].y_coord].village_id = villages[i].village_id
        
    }
    setGrid(genGrid)
  }, [villages])
  const { miniMapStyle } = useStyles()
  return (
    <div
      className={miniMapStyle}
      style={{
        gridTemplateRows: `repeat(10, 1fr)`,
        gridTemplateColumns: `repeat(10, 1fr)`,
        gridColumnGap: 0,
        gridRowGap: 0
      }}
    >
      {grid &&
        grid.map((row, rowIndex) =>
          row.map((cell, cellIndex) => {
            return (
              <div key = {`${rowIndex}-${cellIndex}`}
                style={{
                  border: "1px solid white",
                  color: "white",
                  height: "100%",
                  width: "100%",
                  backgroundColor: cell.villageHere && "blue"
                }}
                onClick = {() => cell.village_id && setVillage(cell.village_id)}
              >
              </div>
            )
          })
        )}
    </div>
  )
}

export default MiniMap
