import React, { Component } from 'react';
import { Card, Progress } from 'antd';
import moment from 'moment';

export default class TaskOverviewDataCard extends Component {
  render() {
    const {
      data
    } = this.props;
    return (
      <Card title="Task basic information">
        <p>ID: {data.id}</p>
        <p>Version: {data.version}</p>
        <p>Owner: {data.owner}</p>
        <p>Task name: {data.name}</p>
        <p>Url: {data.url}</p>
        <p>Branch: {data.branch}</p>
        <p>Type: {data.type}</p>
        <p>Task creation date: {moment.utc(data.date).format('DD/MM/YYYY')}</p>
      </Card>
    );
  }
}
