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

const MiniMap = ({ villages, otherVillages, setVillage, village, calculateDistance }) => {
  const [grid, setGrid] = useState([])
  useEffect(() => {
    let genGrid = []
    for (let y = 0; y < 10; y++) {
      genGrid.push([])
      for (let x = 0; x < 10; x++) {
        genGrid[y].push({
          x,
          y,
          villageHere: false,
          otherVillageHere: false,
          village_id: null
        })
      }
    }
    for (let i = 0; i < villages.length; i++) {
      genGrid[villages[i].y_coord][villages[i].x_coord].villageHere = true
      genGrid[villages[i].y_coord][villages[i].x_coord].village_id =
        villages[i].village_id
    }
    for (let j = 0; j < otherVillages.length; j++) {
      genGrid[otherVillages[j].y_coord][
        otherVillages[j].x_coord
      ].otherVillageHere = true
      genGrid[otherVillages[j].y_coord][otherVillages[j].x_coord].village_id =
        otherVillages[j].village_id
    }
    setGrid(genGrid)
  }, [villages])
  const rightClick = (e, x_coord, y_coord) => {
    e.preventDefault()
    calculateDistance({x_coord, y_coord})
  }
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
        grid.map((column, columnIndex) =>
          column.map((cell, cellIndex) => {
            return (
              <div
                key={`${columnIndex}-${cellIndex}`}
                style={{
                  border: "1px solid white",
                  color: "white",
                  height: "100%",
                  width: "100%",
                  backgroundColor: cell.villageHere && "blue"
                }}
                onClick={() => cell.village_id && setVillage(cell.village_id)}
                onContextMenu={(e) => rightClick(e, cell.x, cell.y)}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: cell.otherVillageHere && "red"
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor:
                        cell.village_id === village.village_id && "green"
                    }}
                  ></div>
                </div>
              </div>
            )
          })
        )}
    </div>
  )
}

export default MiniMap
