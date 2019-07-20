import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import styles from '../Styles/StatusTool/JsonField.module.css';

const { TextArea } = Input;

export default class JsonField extends Component {
  
  render() {
    const { data, size } = this.props;
    return (
      <Row className={styles.JsonFieldWrapper} type="flex" justify="space-around" align="top">
        <Col span={24}>
          <TextArea
            autosize={size}
            value={JSON.stringify(data, null, 2)}
          />
        </Col>
      </Row>
    );
  }
}
