import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'Url',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'Private Access',
    dataIndex: 'privateAccess',
    key: 'access',
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
];

export default class StatusTool extends Component {
  render() {
    const { loading, data } = this.props;
    return (
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            loading={loading}
            title={() => 'All Jobs that are currently running'}
          />
        </Col>
      </Row>
    );
  }
}
