import React, {useEffect} from "react"
import "./App.css"
import axios from 'axios'
import routes from './routes'
import Header from './Components/Header'
import {connect} from 'react-redux'
import {setPlayer} from './redux/authReducer'

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  appStyle: {
    width: '100%',
    minHeight: '100vh'
  },
})


function App({setPlayer}) {
  useEffect(() => {
    axios.get('/auth/user').then(results => {
      setPlayer(results.data)
    })
  }, [setPlayer])
  const {appStyle} = useStyles()
  return <div className={appStyle}>
    <Header />
    {routes}
  </div>
}

export default connect(null, {setPlayer})(App)
