import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import TaskTabs from '../Components/TaskOverview-tabs';

import styles from '../Styles/TaskOverview/main.module.css'

export default class ComponentOverview extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskDataLoading: true,
      taskFossologyLoading: true,
      taskORTLoading: true,
      taskVulnerabilitiesLoading: true,
      taskData: [],
      taskFossology: [],
      taskORT: [],
      taskVulnerabilities: [],
      htmlORTLoading: true,
      htmlORTReport: [],
      htmlFOSLoading: true,
      htmlFOSReport: [],
    };
  }

  componentDidMount() {
    const { id, version } = this.props.location.state.data;
    this.getTaskData(id, version);
    this.getFossologyData(id, version);
    this.getORTData(id, version);
    this.getVulnerabilitiesData(id, version);
    this.getOrtReport(id, version);
  }

  getTaskData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}`)
    .then(result => {
      this.setState({
        taskDataLoading: false,
        taskData: result.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  getFossologyData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}/fossology`)
    .then(result => {
      this.setState({
        taskFossologyLoading: false,
        taskFossology: result.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  getORTData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}/ort`)
    .then(result => {
      this.setState({
        taskORTLoading: false,
        taskORT: result.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  getVulnerabilitiesData = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}/vulnerabilities`)
    .then(result => {
      this.setState({
        taskVulnerabilitiesLoading: false,
        taskVulnerabilities: result.data,
      });
    })
    .catch(function (error) {
    console.log(error);
  })
  }

  getOrtReport = (id, version) => {
    axios.get(`http://cs360.codescoop.com:8081/component/${id}/${version}/ort/html`)
    .then(result => {
      this.setState({
        htmlLoading: false,
        htmlReport: result.data,
      });
    })
    .catch(function (error) {
    console.log(error);
  })
  }


  render() {
    const {
      taskData,
      taskFossology,
      taskORT,
      taskVulnerabilities,
      taskFossologyLoading,
      taskDataLoading,
      taskORTLoading,
      taskVulnerabilitiesLoading,
      htmlReport,
      htmlLoading
    } = this.state;
    const { id, version } = this.props.location.state.data;
    return (
      <Row className={styles.mainWrapper}>
        <Col span={24}>
         <TaskTabs 
          taskData={taskData}
          taskFossolyData={taskFossology}
          taskORTData={taskORT}
          taskVulnerabilityData={taskVulnerabilities}
          taskFossologyLoading={taskFossologyLoading}
          taskDataLoading={taskDataLoading}
          taskORTLoading={taskORTLoading}
          taskVulnerabilitiesLoading={taskVulnerabilitiesLoading}
          componentVersion={version}
          componentID={id}
          htmlReport={htmlReport}
          htmlLoading={htmlLoading}
         />
        </Col>
      </Row>
    );
  }
}
