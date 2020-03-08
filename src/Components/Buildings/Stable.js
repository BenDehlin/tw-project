import React from 'react'

const Stable = ({history, village}) => {
  console.log(village)
  return (
    <div>
    <div onClick ={() => history.push('/village')}>back to village</div>
    <h1>Stable</h1>
  </div>
  )
}

export default Stable