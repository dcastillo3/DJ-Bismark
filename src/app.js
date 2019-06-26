import React from 'react';
import {Header, Main, Footer} from './components';
import { Dashboard } from './dashboard';
import { Router, Route } from 'react-router-dom';
import history from './history';


const App = props => {
  return (
    <div className="sections flex-column">
      <Router history={history}>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Main} />
        <Route exact path="/" component={Footer} />

        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  )
}

export default App
