import React from 'react'

const Mine = ({history, village}) => {
  console.log(village)
  return (
    <div>
    <div onClick ={() => history.push('/village')}>back to village</div>
    <h1>Mine</h1>
  </div>
  )
}

export default Mine