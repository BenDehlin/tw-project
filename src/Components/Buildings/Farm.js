import React from 'react'
import { connect } from "react-redux"


const Farm = ({history, village}) => {
  console.log(village)
  return (
    <div>
    <div onClick ={() => history.push('/village')}>back to village</div>
    <h1>Farm</h1>
  </div>
  )
}

const mapStateToProps = ({ villageReducer }) => {
  const { village } = villageReducer
  return { village }
}

export default connect(mapStateToProps)(Farm)