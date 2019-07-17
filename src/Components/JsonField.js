import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import styles from '../Styles/StatusTool/JsonField.module.css';

const { TextArea } = Input;

export default class JsonField extends Component {
  
  render() {
    const { data } = this.props;
    return (
      <Row className={styles.JsonFieldWrapper} type="flex" justify="space-around" align="top">
        <Col span={24}>
          <TextArea
            autosize={{ minRows: 40, maxRows: 40 }}
            value={JSON.stringify(data, null, 2)}
          />
        </Col>
      </Row>
    );
  }
}
