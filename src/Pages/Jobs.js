import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import JobsList from '../Components/JobsList';

import styles from '../Styles/JobsList/main.module.css';

export default class StatusTool extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      jobs: [],
    };
  }

  componentDidMount() {
    axios.get('http://cs360.codescoop.com:8081/component')
    .then(response => {
      this.setState({
        isLoaded: true,
        jobs: response,
      })
    })
  }
  
  render() {
    const { isLoaded, jobs } = this.state;
    return (
      <Row className={styles.mainwrapper}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <JobsList 
            data={jobs}
            loading={isLoaded}
          />
        </Col>
      </Row>
    );
  }
}