import React, { Component } from 'react';
import { Row, Col } from 'antd';

import CreateNewTaskForm from '../Components/NewTaskForm';
import styles from '../Styles/NewTask/NewTask.module.css';

export default class NewTask extends Component {  
  render() {
    return (
      <Row className={styles.mainWrapper}>
        <Col span={24}>
          <CreateNewTaskForm 
            handleSubmit={this.handleSubmit}
          />
        </Col>
      </Row>
    );
  }
}
