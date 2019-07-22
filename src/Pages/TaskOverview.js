import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import JsonField from '../Components/JsonField'

import styles from '../Styles/StatusTool/main.module.css';

export default class TaskOverView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    const { id, version } = this.props.location.state.data;
    this.getTaskData(id, version);
  }

  getTaskData = (id) => {
    axios.get(`http://cs360.codescoop.com:8081/task/${id}`)
    .then(result => {
      this.setState({
        isLoading: false,
        data: result.data,
      });
    })
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <Row className={styles.mainwrapper} type="flex" justify="space-around" align="top">
        <Col span={12}>
          <JsonField
            data={data}
            size={{minRows: 42, maxRows: 42 }}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    );
  }
}
