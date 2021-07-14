import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import Secret from './pages/secret'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/secret_link" component={Secret} exact />
      </Switch>
    </Router>
  )
}

export default App;
