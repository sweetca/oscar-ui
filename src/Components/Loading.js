import React from 'react';
import styles from '../Styles/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dot_container}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
