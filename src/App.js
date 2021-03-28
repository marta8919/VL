import React from 'react'
import './App.css';
import {Route, Switch, withRouter} from  'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={NotFound}/>
      </Switch>
      
    </div>
  )
}

export default withRouter(App);