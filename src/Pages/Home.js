import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Logo from '../Assets/logo.png'
import styles from '../Styles/Home/main.module.css';

export default class Home extends Component {  
  render() {
    return (
      <Row className={styles.mainWrapper} type="flex" justify="space-around" align="middle">
        <Col span={24}>
          <img className={styles.mainLogo} src={Logo} alt="Codescoop - oscar" />
          <h1>Oscar</h1>
          <h3>Tool-UI for os360</h3>
        </Col>
      </Row>
    );
  }
}
