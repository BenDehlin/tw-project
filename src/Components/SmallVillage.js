import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  smallVillageStyle: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer'
  }
})

const SmallVillage = ({village}) => {
  const {smallVillageStyle} = useStyles()
  return (
    <div className={smallVillageStyle}>{village.village_name}</div>
  )
}

export default SmallVillage