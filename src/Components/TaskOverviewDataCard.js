import React, { Component } from 'react';
import { Card, Progress } from 'antd';
import moment from 'moment';

export default class TaskOverviewDataCard extends Component {
  render() {
    const {
      data,
      isLoading
    } = this.props;
    return (
      <Card 
        title="Component basic information"
        loading={isLoading}
      >
        <p>ID: {data.id}</p>
        <p>Version: {data.version}</p>
        <p>Owner: {data.owner}</p>
        <p>Component name: {data.name}</p>
        <p>Url: {data.url}</p>
        <p>Branch: {data.branch}</p>
        <p>Type: {data.type}</p>
        <p>Creation date: {moment.utc(data.date).format('DD/MM/YYYY')}</p>
        <p>Component version: {data.version}</p>
        <p>Progress:</p>
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={data.task && data.task.progressBar}
        />
      </Card>
    );
  }
}
