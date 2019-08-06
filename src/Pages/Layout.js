import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import NavigationBar from '../Components/NavBar';
import Home from './Home';
import Components from './Components';
import Tasks from './Tasks';
import Task from './TaskOverview';
import ComponentView from './ComponentOverview';
import NewTask from './NewTask';
import Running from './Running';
import PageNotFound from './404';

export default class Layout extends PureComponent {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path='/home' component={Home} />
          <Route path='/components' component={Components} />
          <Route path='/component/:id/:version' component={ComponentView} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/task/:id' component={Task} />
          <Route path='/newtask' component={NewTask} />
          <Route path='/running' component={Running} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
