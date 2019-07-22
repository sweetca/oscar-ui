import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';

import ComponentList from '../Components/ComponentList';

import styles from '../Styles/JobsList/main.module.css';

export default class Components extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: true,
      components: [],
    };
  }

  componentDidMount() {
    axios.get('http://cs360.codescoop.com:8081/component')
    .then((response) => {
      this.setState({
        isLoaded: false,
        components: response.data,
      });
    }).catch((error) => {
      console.error(error);
  });
  }
  
  render() {
    const { isLoaded, components } = this.state
    return (
      <Row className={styles.mainwrapper}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <ComponentList 
            data={components}
            loading={isLoaded}
          />
        </Col>
      </Row>
    );
  }
}
