import React, { Component } from 'react';
import { Row, Col, Tabs, Icon } from 'antd';

import JsonField from './JsonField';
import InformationCard from './TaskOverviewDataCard';

const { TabPane } = Tabs;

export default class TaskOverviewTabs extends Component {
  render() {
    const {
      taskData,
      taskFossolyData,
      taskORTData,
      taskVulnerabilityData,
      isLoading
    } = this.props;
    return (
      <Tabs defaultActiveKey="basicInformation">
        <TabPane
          tab={
            <span>
              <Icon type="code" theme="twoTone" />
              Basic information
            </span>
          }
          key="basicInformation"
        >
          <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={12}>
              <InformationCard
                data={taskData}
                isLoading={isLoading}
              />
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={12}>
              <JsonField 
                size={{minRows: 37, maxRows: 37 }}
                data={taskData}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="file" theme="twoTone" />
              Fossology
            </span>
          }
          key="fossology"
        >
          <JsonField 
            size={{minRows: 37, maxRows: 37 }}
            data={taskFossolyData}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="tool" theme="twoTone" />
              ORT
            </span>
          }
          key="ort"
        >
          <JsonField 
            size={{minRows: 37, maxRows: 37 }}
            data={taskORTData}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="security-scan" theme="twoTone" />
              Vulnerability
            </span>
          }
          key="vulnerability"
        >
          <JsonField 
            size={{minRows: 37, maxRows: 37 }}
            data={taskVulnerabilityData}
          />
        </TabPane>
      </Tabs>
    );
  }
}
