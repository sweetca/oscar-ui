import React, { Component } from 'react';
import { Row, Col, Progress } from 'antd';
import axios from 'axios';

import JsonField from '../Components/JsonField'

import styles from '../Styles/StatusTool/main.module.css';

export default class TaskOverView extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskDataLoading: true,
      taskData: [],
      statusData: [],
    };
  }

  componentDidMount() {
    const { id, version } = this.props.location.state.data;
    this.getTaskData(id, version);
    this.getStatus(id);
  }

  getTaskData = (id) => {
    axios.get(`http://cs360.codescoop.com:8081/task/${id}`)
    .then(result => {
      this.setState({
        taskDataLoading: false,
        taskData: result.data,
      });
    })
  }

  getStatus = (id) => {
    axios.get(`http://cs360.codescoop.com:8081/task/${id}/status`)
    .then(result => {
      this.setState({
        statusData: result.data,
      })
    })
  }

  render() {
    const { taskDataLoading, taskData, statusData } = this.state;
    console.log(statusData)
    return (
      <Row className={styles.mainwrapper} type="flex" justify="space-around" align="top">
        <Col span={5} className={styles.information_container}>
          <Progress type="circle" percent={taskData.progressBar} />
          {statusData ? <h1>Finished</h1> : <h1>Still Running...</h1>}
        </Col>

        <Col span={19}>
          <JsonField
            data={taskData}
            size={{minRows: 42, maxRows: 42 }}
            isLoading={taskDataLoading}
          />
        </Col>
      </Row>
    );
  }
}
