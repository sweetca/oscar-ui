import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import axios from 'axios';

import UrlForm from '../Components/UrlForm';
import JsonField from '../Components/JsonField'

import styles from '../Styles/StatusTool/main.module.css';

const { TextArea } = Input;

export default class StatusTool extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  getTaskData = (id) => {
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
    return (
      <Row className={styles.mainwrapper}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <UrlForm
            getData={this.getTaskData}
          />
        </Col>
        <Col  xs={24} sm={24} md={24} lg={24} xl={12}>
          {isLoaded ? 
            <JsonField
            data={data}
            size={{minRows: 40, maxRows: 40 }}
          /> : 
            <Col span={24}>
              <TextArea
                autosize={{ minRows: 40, maxRows: 40 }}
                value="JSON data will appear here"
                disabled={true}
              />
            </Col>
          }
        </Col>
      </Row>
    );
  }
}
