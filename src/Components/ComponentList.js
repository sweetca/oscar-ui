import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    render: (text, record) =>
    <Link to={{
      pathname: `/component/${record.id}/${record.version}`,
      state: { 
        data: record,
      }
    }}>
      {text}
    </Link>
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
    width: '20%',
  },
  {
    title: 'Url',
    dataIndex: 'url',
    key: 'url',
    width: '50%',
  },
  {
    title: 'Private Access',
    dataIndex: 'privateAccess',
    key: 'access',
    width: '10%',
    render: val => val === false ? <span>False</span> : <span>True</span>
  },
];

export default class ComponentList extends Component {
  render() {
    const { loading, data } = this.props;
    return (
      <Row>
        <Col span={24}>
          <Table
            rowKey="id" 
            columns={columns}
            dataSource={data}
            bordered
            loading={loading}
            title={() => 'All components'}
          />
        </Col>
      </Row>
    );
  }
}
