import React from 'react'

const Farm = ({history, village}) => {
  console.log(village)
  return (
    <div>
    <div onClick ={() => history.push('/village')}>back to village</div>
    <h1>Farm</h1>
  </div>
  )
}

export default Farm