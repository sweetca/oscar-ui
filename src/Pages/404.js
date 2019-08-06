import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Home/main.module.css';

export default class Home extends Component {  
  render() {
    return (
      <div className={styles.mainWrapper}>
        <h1>404</h1>
        <h3>The page you were looking for doesn't exist...</h3>
        <h3><Link to='/home'>Back to home</Link></h3>
      </div>
    );
  }
}
