import React, { Component } from 'react';
import { Row, Col, Table, Progress } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '20%',
    render: (text, record) =>
    <Link to={{
      pathname: `/task/${record.id}`,
      state: { 
        data: record,
      }
    }}>
      {text}
    </Link>
  },
  {
    title: 'For component',
    dataIndex: 'component',
    key: 'component',
    width: '20%',
  },
  {
    title: 'Jobs',
    dataIndex: 'jobs',
    key: 'jobs',
    width: '10%',
    render: (text, record) => {
      const array = record.jobs;
      return array.length;
    }
  },
  {
    title: 'Jobs done',
    dataIndex: 'progress',
    key: 'ready',
    width: '10%',
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
    width: '10%',
  },
  {
    title: 'Status',
    dataIndex: 'progressBar',
    key: 'progress',
    width: '20%',
    render: (text, record) => <Progress percent={record.progressBar} size="small" />
  },
];


export default class TasksList extends Component {
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
            title={() => 'All Tasks'}
          />
        </Col>
      </Row>
    );
  }
}
