import React from 'react'

const TownCenter = ({history, village}) => {
  console.log(village)
  return (
    <div>
    <div onClick ={() => history.push('/village')}>back to village</div>
    <h1>Town Center</h1>
  </div>
  )
}

export default TownCenter