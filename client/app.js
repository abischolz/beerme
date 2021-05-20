import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {Login, Signup, AuthForm} from './components/AuthForm'

const App = () => {
  console.log('rendering app ')

  return (
    <div>
      <div className="App-header">
        <div className="App-header-style">
          <Navbar />
        </div>
      </div>
      <div>
        {' '}
        <Routes />
      </div>
    </div>
  )
}

export default App
