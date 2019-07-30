import React, { Component } from 'react';
import { Drawer } from 'antd';

import LeftNav from './LeftNav'
import '../../Styles/NavigationBar/NavigationBar.css';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
      visible: false
    }
  }
  
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="navigationbar">
        <div className="logo">
          <p>Oscar</p>
        </div>
        <div className="menuContent">
          <div className="leftNav">
            <LeftNav 
              menumode='horizontal'
            />
          </div>
          <button className="barsMenu" type="default" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </button>
          <Drawer
            title="Navigation"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftNav 
              menuMode='inline'
            />
          </Drawer>
        </div>
      </nav>
    );
  }
}