import React, { Component } from 'react';
import { Col, Row, Input,Form, Button } from 'antd';

import styles from '../Styles/StatusTool/UrlForm.module.css';

export default class UrlForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getData(this.state.value);
    e.target.value = '';
    this.setState({ value: ''});
  }

  render() {
    return (
      <Row className={styles.inputFieldWrapper} type="flex" justify="space-around" align="top">
        <Col span={24}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item> 
            <Input 
              placeholder="Input id of task"
              value={this.state.value}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}>
            </Input>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
