import React from 'react';
import {Header, Main, Footer} from './components';

const App = props => {
  return (
    <div className="sections flex-column">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
