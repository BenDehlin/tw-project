import React from 'react'
import {connect} from 'react-redux'
import {createUseStyles} from 'react-jss'
import useAxios from '../hooks/useAxios'
import {setVillage} from '../redux/villageReducer'

const useStyles = createUseStyles({
  bigVillageStyle: {}
})

const BigVillage = ({village_id, setVillage}) => {
  const {bigVillageStyle} = useStyles()
  const [village] = useAxios({
    url: `/api/village/${village_id}`,
    callback: setVillage,
    initialData: {}
  })
  console.log({village})
  return (
    <div className={bigVillageStyle}>
      <h1>{village.village_name}</h1>
      <div>{village.buildings && village.buildings.map(building => (
        <h3 key={building.tw_village_building_link_id}>
          {building.building_name}
        </h3>
      ))} </div>
    </div>
  )
}

export default connect(null, {setVillage})(BigVillage)