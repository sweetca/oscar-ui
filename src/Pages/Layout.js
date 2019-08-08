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
import Task from './TaskOverview';
import ComponentView from './ComponentOverview';
import NewTask from './NewTask';
import PageNotFound from './404';

import '../index.css'

const pathInformation = [
  { type: 'Components', urlPath:'http://cs360.codescoop.com:8081/component', title:'All Components'},
  { type: 'Tasks', urlPath:'http://cs360.codescoop.com:8081/task/latest', title:'All Tasks'},
  { type: 'Running', urlPath:'http://cs360.codescoop.com:8081/task/running', title:'All Running Tasks'},
]

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="App-Wrapper">
        <Router>
        <NavigationBar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path='/home' component={Home} />
            <Route path='/task/:id' component={Task} />
            <Route path='/newtask' component={NewTask} />
            <Route path='/component/:id/:version' component={ComponentView} />
            <Route 
              path='/components' 
              render={(props) => <Components {...props} information={pathInformation[0]} />}
            />
            <Route 
              path='/tasks'
              render={(props) => <Components {...props} information={pathInformation[1]} />}
            />
            <Route
              path='/running'
              render={(props) => <Components {...props} information={pathInformation[2]} />}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
