import React, { Component } from 'react';
import { Row, Col, Input, Spin } from 'antd';

import styles from '../Styles/StatusTool/JsonField.module.css';

const { TextArea } = Input;

export default class JsonField extends Component {
  
  render() {
    const { data, size, isLoading } = this.props;
    return (
      <Row className={styles.JsonFieldWrapper} type="flex" justify="space-around" align="top">
        <Col span={24}>
          {Object.keys(data).length === 0 ? 
            <Spin
              tip="Scanning is still in progress..."
              spinning={isLoading}
              size="large"
            >
            <TextArea
            autosize={size}
            value={JSON.stringify(data, null, 2)}
            />
            </Spin> : 
            <Spin 
              tip="Loading..."
              spinning={isLoading}
              size="large"
            >
            <TextArea
              autosize={size}
              value={JSON.stringify(data, null, 2)}
            />
            </Spin>
          }
        </Col>
      </Row>
    );
  }
}
