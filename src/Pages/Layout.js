import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../Components/Navigationbar';

import Home from './Home';
import StatusTool from './StatusTool';

export default class Layout extends Component{
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/statustool' component={StatusTool}/>
        </Switch>
      </Router>
    );
  }
}
