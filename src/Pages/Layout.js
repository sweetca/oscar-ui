import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavigationBar from '../Components/Navigationbar';

import Home from './Home';
import StatusTool from './StatusTool';
import TasksTool from './Tasks';
import ComponentView from './TaskOverview';
import NewTask from './NewTask';

export default class Layout extends Component{
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path='/home' component={Home} />
          <Route path='/tasks' component={TasksTool} />
          <Route path='/component' component={ComponentView} />
          <Route path='/statustool' component={StatusTool} />
          <Route path='/newtask' component={NewTask} />
        </Switch>
      </Router>
    );
  }
}
