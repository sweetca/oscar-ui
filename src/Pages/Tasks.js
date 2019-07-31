import React, { PureComponent } from 'react';
import axios from 'axios';

import TasksList from '../Components/TasksList';
import styles from '../Styles/ListViews/main.module.css';

export default class Tasks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      latestLoading: true,
      latestTasks: [],
    };
  }

  componentDidMount() {
    axios.get('http://cs360.codescoop.com:8081/task/latest')
      .then((response) => {
        this.setState({
          latestLoading: false,
          latestTasks: response.data,
        });
      });
  }

  render() {
    const { latestLoading, latestTasks } = this.state;
    return (
      <div className={styles.mainWrapper}>
        <TasksList
          title="Latest 20 tasks"
          data={latestTasks}
          loading={latestLoading}
        />
      </div>
    );
  }
}
