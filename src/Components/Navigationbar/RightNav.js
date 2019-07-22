import React, { Component } from 'react';
import { Menu } from 'antd';

export default class RightNav extends Component {
  render() {
    return (
		  <Menu mode={this.props.menumode}>
        <Menu.Item key="mail">
          <a href="/home">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/home">Signup</a>
        </Menu.Item>
      </Menu>
    );
  }
}
