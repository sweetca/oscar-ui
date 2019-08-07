import React, { Component } from 'react';
import { Row, Col, Tabs, Icon } from 'antd';

import JsonField from './JsonField';
import InformationCard from './TaskOverviewDataCard';
import HtmlReport from './HtmlReport';

const { TabPane } = Tabs;

export default class TaskOverviewTabs extends Component {
  render() {
    const {
      taskData,
      taskFossolyData,
      taskORTData,
      taskVulnerabilityData,
      taskFossologyLoading,
      taskDataLoading,
      taskORTLoading,
      taskVulnerabilitiesLoading,
      htmlReport,
      reportLoading
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
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <InformationCard
                data={taskData}
                isLoading={taskDataLoading}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <JsonField 
                size={{minRows: 37, maxRows: 37 }}
                data={taskData}
                isLoading={taskDataLoading}
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
            isLoading={taskFossologyLoading}
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
            isLoading={taskORTLoading}
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
            isLoading={taskVulnerabilitiesLoading}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="tool" theme="twoTone" />
              Html Report
            </span>
          }
          key="report"
        >
          <HtmlReport 
            data={htmlReport}
            isLoading={reportLoading}
          />
        </TabPane>
      </Tabs>
    );
  }
}
