import React from 'react'
import {createUseStyles} from 'react-jss'
import {withRouter} from 'react-router-dom'

const useStyles = createUseStyles({
  headerStyle: {
    height: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})

const Header = ({history}) => {
  const {headerStyle} = useStyles()
  return(
    <header className={headerStyle}>
      <button onClick ={() => history.push('/login')}>Login</button>
      <button onClick ={() => history.push('/register')}>Register</button>
      <button onClick ={() => history.push('/')}>Dashboard</button>
    </header>
  )
}

export default withRouter(Header)