import React, { Component } from 'react';
import { Row, Col } from 'antd';

import UrlForm from '../Components/UrlForm';
import JsonField from '../Components/JsonField'

import styles from '../Styles/StatusTool/main.module.css';

export default class StatusTool extends Component {
  
  render() {
    return (
      <Row className={styles.mainwrapper}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <UrlForm />
        </Col>
        <Col  xs={24} sm={24} md={24} lg={24} xl={12}>
          <JsonField/>
        </Col>
      </Row>
    );
  }
}
