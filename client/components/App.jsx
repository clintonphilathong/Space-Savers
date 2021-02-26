import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Owner from './Owner'
import Register from './Register'
import SignIn from './SignIn'

const App = () => {
  return (
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Home} />
      <Route path='/owner' component={Owner} />
      <Route path='/register' component={Register} />
      <Route path='/signin' component={SignIn} />
    </div>
  )
}

export default App
