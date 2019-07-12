import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import styles from '../Styles/StatusTool/JsonField.module.css';
import data from '../TestData/data.json';

const { TextArea } = Input;

export default class JsonField extends Component {
  constructor(props){
    super(props);
    this.state = {
      dummydata: data
    };
  }
  
  render() {
    const data = this.state;
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
