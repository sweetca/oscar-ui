import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import TasksList from '../Components/TasksList';

import styles from '../Styles/JobsList/main.module.css';

export default class Tasks extends Component {
  constructor(props){
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
    }).catch((error) => {
      console.error(error);
    });
  }
  
  render() {
    const { latestLoading, latestTasks } = this.state
    return (
      <Row className={styles.mainwrapper}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <TasksList
            title='Latest 20 tasks'
            data={latestTasks}
            loading={latestLoading}
          />
        </Col>
      </Row>
    );
  }
}
