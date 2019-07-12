import React, { Component } from 'react';
import Layout from './Pages/Layout'
import './Styles/Common/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App-Wrapper">
        <Layout />
      </div>
    );
  }
}
