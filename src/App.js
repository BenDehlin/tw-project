import React from "react"
import "./App.css"
import routes from './routes'
import Header from './Components/Header'

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  appStyle: {},
})


function App() {
  const {appStyle} = useStyles()
  return <div className={appStyle}>
    <Header />
    {routes}
  </div>
}

export default App
