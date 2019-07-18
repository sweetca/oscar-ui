import React, { Component } from 'react';
import axios from 'axios';
import { Collapse, Form, Select, Button, Input, Checkbox, Row, Col } from 'antd';

const { Option } = Select;
const { Panel } = Collapse;

class CreateNewTaskForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    }
    return (
      <Form {...formLayout} onSubmit={this.handleSubmit}>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="Basic information of task" key="1">
            <Form.Item label="Type:" hasFeedback>
            {getFieldDecorator('type', {
              rules: [{ required: true, message: 'Please select type!' }],
            })(
              <Select placeholder="Please select type...">
                <Option value="github">Github</Option>
                <Option value="gitlab">Gitlab</Option>
              </Select>
            )}
            </Form.Item>
            <Form.Item label="Owner:">
              {getFieldDecorator('owner', {
                rules: [{ required: true, message: 'Please input owner of repo!' }],
              })(
                <Input
                  placeholder="Owner of repository..."
                />
              )}
            </Form.Item>
            <Form.Item label="Name:">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input name of repository!' }],
              })(
                <Input
                  placeholder="Name of repository..."
                />
              )}
            </Form.Item>
            <Form.Item label="Url:">
              {getFieldDecorator('url', {
                rules: [{ required: true, message: 'Please input repository url!' }],
              })(
                <Input
                  placeholder="Url of repository..."
                />
              )}
            </Form.Item>
            <Form.Item label="Private">
              {getFieldDecorator('isPrivate', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox />
              )}
            </Form.Item>
            <Form.Item label="Branch:">
              {getFieldDecorator('branch', {
                rules: [{ required: true, message: 'Please input your branch name!' }],
              })(
                <Input
                  placeholder="Branch name..."
                />
              )}
            </Form.Item>
          </Panel>
          <Panel header="Git Credentials" key="2">
            <Form.Item label="Accesstoken:">
              {getFieldDecorator('accesstoken', {
                rules: [{ required: true, message: 'Please input your git accesstooken!' }],
              })(
                <Input
                  placeholder="Git accesstoken..."
                />
              )}
            </Form.Item>
            <Form.Item label="Username:">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please your git username!' }],
              })(
                <Input
                  placeholder="Git username..."
                />
              )}
            </Form.Item>
          </Panel>
          <Panel header="Task configuration" key="3">
            <Form.Item label="Git Clone:">
              {getFieldDecorator('gitClone', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox />
              )}
            </Form.Item>
            <Form.Item label="Fossylogy scan:">
              {getFieldDecorator('fossyScan', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox />
              )}
            </Form.Item>
            <Form.Item label="ORT:">
              {getFieldDecorator('ort', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox />
              )}
            </Form.Item>
            <Form.Item label="Vulnerability scan:">
              {getFieldDecorator('vulnerability', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox />
              )}
            </Form.Item>
          </Panel>
        </Collapse>
        <Row type="flex" justify="center" style={{paddingTop: 20}}>
          <Col>
            <Button type="primary" htmlType="submit">
              Submit task
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create({ name: 'normal_login' })(CreateNewTaskForm);
