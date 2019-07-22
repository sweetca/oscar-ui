import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavigationBar from '../Components/Navigationbar';

import Home from './Home';
import Components from './Components';
import Tasks from './Tasks'
import Task from './TaskOverview';
import ComponentView from './ComponentOverview';
import NewTask from './NewTask';

export default class Layout extends Component{
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path='/home' component={Home} />
          <Route path='/components' component={Components} />
          <Route path='/component' component={ComponentView} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/task' component={Task} />
          <Route path='/newtask' component={NewTask} />
        </Switch>
      </Router>
    );
  }
}
