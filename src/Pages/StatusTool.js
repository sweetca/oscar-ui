import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import UrlForm from '../Components/UrlForm';
import JsonField from '../Components/JsonField'

import styles from '../Styles/StatusTool/main.module.css';

export default class StatusTool extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  getJobData = (id) => {
    axios.get(`http://cs360.codescoop.com:8081/task/${id}`)
    .then(result => {
      this.setState({
        isLoaded: true,
        data: result.data,
      });
    })
  }

  render() {
    const { isLoaded, data } = this.state;
    console.log(data)
    console.log(isLoaded);
    return (
      <Row className={styles.mainwrapper}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <UrlForm
            getData={this.getJobData}
          />
        </Col>
        <Col  xs={24} sm={24} md={24} lg={24} xl={12}>
          {isLoaded ? 
            <JsonField
            data={data}
          /> : 
            <Col span={24}>
              Ready to receive data...
            </Col>
          }
        </Col>
      </Row>
    );
  }
}
