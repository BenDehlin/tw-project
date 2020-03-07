import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'

// import Barracks from './Components/Buildings/Barracks'

export default (
  <Switch>
    <Route path = '/village' component={Dashboard} />
    <Route path = '/login' component={Login} />
    <Route path = '/register' component={Register} />
    {/* <Route path = '/building/barracks' component={Barracks} /> */}
  </Switch>
)