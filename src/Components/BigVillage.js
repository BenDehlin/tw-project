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
  return (
    <div className={bigVillageStyle}>{village.village_name}</div>
  )
}

export default connect(null, {setVillage})(BigVillage)