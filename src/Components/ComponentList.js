import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Github from '../Assets/github.svg';
import Gitlab from '../Assets/gitlab.svg';
import True from '../Assets/true.png';
import False from '../Assets/false.png';
import styles from '../Styles/Datalist.module.css';

export default class Datalist extends PureComponent {
  
  render() {
    const {
      data,
      title,
    } = this.props;
    console.log(data);
    return (
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <h2>{title}</h2>
        </div>
        {data.map(dataItem => (
          <div key={dataItem.id} className={styles.container}>
            <div className={styles.basic_information}>
              <div className={styles.info_container}>
                <span>Name:</span>
                <span>{dataItem.name}</span>
              </div>
              <div className={styles.info_container}>
                <span>Owner:</span>
                <span>{dataItem.owner}</span>
              </div>
              <div className={styles.info_container}>
                <span>Type:</span>
                <span>{dataItem.type === 'github' ? <img src={Github} alt="" /> : <img src={Gitlab} alt="" />}</span>
              </div>
              <div className={styles.info_container}>
                <span>URL:</span>
                <a href={dataItem.url}>{dataItem.url}</a>
              </div>
            </div>
            <div className={styles.secondary_information}>
              <div className={styles.info_container}>
                <span>Creation date:</span>
                <span>{moment.utc(dataItem.date).format('DD/MM/YYYY')}</span>
              </div>
              <div className={styles.info_container}>
                <span>Private access:</span>
                <span>{dataItem.privateAccess ? <img src={True} alt="" /> : <img src={False} alt="" />}</span>
              </div>
            </div>
            <div className={styles.actions_container}>
              <Link to={{
                pathname: `/component/${dataItem.id}/${dataItem.version}`,
                state: {
                  data: { ...dataItem.id, ...dataItem.version },
                },
              }}
              >
                <button type="button">
                  View component
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
