import React, { PureComponent } from 'react';
import axios from 'axios';

import ComponentList from '../Components/ComponentList';
import styles from '../Styles/ListViews/main.module.css';

export default class Components extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      components: [],
    };
  }

  componentDidMount() {
    axios.get('http://cs360.codescoop.com:8081/component')
      .then((response) => {
        this.setState({
          isLoading: false,
          components: response.data,
        });
      });
  }

  render() {
    const { isLoading, components } = this.state;
    return (
      <div className={styles.mainWrapper}>
        <ComponentList
          data={components}
          loading={isLoading}
        />
      </div>
    );
  }
}
