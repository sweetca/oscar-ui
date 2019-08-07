import React, { Component } from 'react';
import styles from '../Styles/Report/Report.module.css'

export default class HtmlReport extends Component {  

  renderReport = (reportData) => {
    return(
      <iframe 
      srcDoc={reportData.content}
      title={reportData.id}
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen
      className={styles.frame}
    />
    )
  }

  render() {
    const {
      data,
      isLoading,
    } = this.props;
    return (
      <div>
        {!isLoading ? this.renderReport(data) : <h1>Loading Report</h1> } 
      </div>
    );
  }
}
