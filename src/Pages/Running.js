import React, { PureComponent } from 'react';
import axios from 'axios';

import TasksList from '../Components/TasksList';
import styles from '../Styles/ListViews/main.module.css';

export default class Running extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      runningLoading: true,
      allRunningTasks: [],
    };
  }

  componentDidMount() {
    axios.get('http://cs360.codescoop.com:8081/task/running')
      .then((response) => {
        this.setState({
          runningLoading: false,
          allRunningTasks: response.data,
        });
      });
  }

  render() {
    const { runningLoading, allRunningTasks } = this.state;
    return (
      <div className={styles.mainWrapper}>
        <TasksList
          title="All running tasks"
          data={allRunningTasks}
          loading={runningLoading}
        />
      </div>
    );
  }
}
