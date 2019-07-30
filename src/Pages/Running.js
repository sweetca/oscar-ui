import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import TasksList from '../Components/TasksList';

import styles from '../Styles/JobsList/main.module.css';

export default class Running extends Component {
  constructor(props){
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
    }).catch((error) => {
      console.error(error);
    });
  }
  
  render() {
    const { runningLoading, allRunningTasks } = this.state
    return (
      <Row className={styles.mainwrapper}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <TasksList 
            title='All running tasks'
            data={allRunningTasks}
            loading={runningLoading}
          />
        </Col>
      </Row>
    );
  }
}
