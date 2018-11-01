import React from 'react'

import {Header, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="sections">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
