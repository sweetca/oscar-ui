import React, { Component } from 'react';
import { Col, Row, Form, Input, Button } from 'antd';

import styles from '../Styles/StatusTool/UrlForm.module.css';

export default class UrlForm extends Component{
  render() {
    return (
      <Row className={styles.inputFieldWrapper} type="flex" justify="space-around" align="top">
        <Col span={24}>
          <Form onSubmit={this.handleSubmit} className="url-form">
            <Form.Item>
              <Input
                placeholder="Input your Url..."
              />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="url-form-button">
            Submit
          </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
