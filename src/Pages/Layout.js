import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from '../Components/Navigationbar';

import Home from './Home';
import StatusTool from './StatusTool';
import JobsTool from './Jobs';

export default class Layout extends Component{
  
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/statustool' component={StatusTool}/>
          <Route path='/jobs' component={JobsTool}/>
        </Switch>
      </Router>
    );
  }
}
