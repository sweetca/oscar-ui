import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import TaskTabs from '../Components/TaskOverview-tabs';

import styles from '../Styles/TaskOverview/main.module.css'

export default class StatusTool extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      taskData: [],
      taskFossology: [],
      taskORT: [],
      taskVulnerabilities: [],
    };
  }

  componentDidMount() {
    const { id, version } = this.props.location.state.data;
    this.getTaskData(id, version);
    this.getFossologyData(id, version);
    this.getORTData(id, version);
    this.getVulnerabilitiesData(id, version);
  }

  getTaskData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}`)
    .then(result => {
      this.setState({
        taskData: result.data,
      });
    })
  }

  getFossologyData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}/fossology`)
    .then(result => {
      this.setState({
        taskFossology: result.data,
      });
    })
  }

  getORTData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}/ort`)
    .then(result => {
      this.setState({
        taskORT: result.data,
      });
    })
  }

  getVulnerabilitiesData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}/vulnerabilities`)
    .then(result => {
      this.setState({
        isLoading: false,
        taskVulnerabilities: result.data,
      });
    })
  }
  render() {
    const { taskData, taskFossology, taskORT, taskVulnerabilities, isLoading } = this.state
    return (
      <Row className={styles.mainWrapper}>
        <Col span={24}>
         <TaskTabs 
          taskData={taskData}
          taskFossolyData={taskFossology}
          taskORTData={taskORT}
          taskVulnerabilityData={taskVulnerabilities}
          isLoading={isLoading}
         />
        </Col>
      </Row>
    );
  }
}
