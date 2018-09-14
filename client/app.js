import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="sections">
      <Navbar />
      <div className="main">
        <Routes />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
