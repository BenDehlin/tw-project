import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'

export default (
  <Switch>
    <Route exact path = '/' component={Dashboard} />
    <Route path = '/login' component={Login} />
    <Route path = '/register' component={Register} />
  </Switch>
)