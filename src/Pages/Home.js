import React, { PureComponent } from 'react';

import Logo from '../Assets/logo.png';
import styles from '../Styles/Home.module.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <img className={styles.mainLogo} src={Logo} alt="Codescoop - oscar" />
        <h1>Oscar</h1>
        <h3>Tool-UI for os360</h3>
      </div>
    );
  }
}
