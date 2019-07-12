import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class LeftNav extends Component {
  render() {
    return (
			<Menu mode="horizontal">
      	<Menu.Item key="home">
          <Link to='/home'>
            <Icon 
              type="home"
              theme="twoTone"
              twoToneColor="#black"
            />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="jobs">
          <Link to='/jobs'>
            <Icon 
              type="tool"
              theme="twoTone"
              twoToneColor="#black"
            />
            Jobs
          </Link>
        </Menu.Item>
        <Menu.Item key="statustool">
          <Link to='/statustool'>
            <Icon 
              type="tool"
              theme="twoTone"
              twoToneColor="#black"
            />
            Job status tool
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}