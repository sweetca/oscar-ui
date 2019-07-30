import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  render() {
    return (
			<Menu mode={this.props.menumode}>
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
        <SubMenu
          title={
            <span>
              <Icon 
                type="container"
                theme="twoTone"
                twoToneColor="#black"
              />
              Overviews
            </span>
          }
        >
          <Menu.ItemGroup title="Overviews">
            <Menu.Item key="components">
              <Link to='/components'>
              <Icon 
                type="unordered-list"
              />
              All components
              </Link>
            </Menu.Item>
            <Menu.Item key="tasks">
              <Link to='/tasks'>
                <Icon 
                  type="unordered-list"
                />
                All tasks
              </Link>
            </Menu.Item>
            <Menu.Item key="running">
              <Link to='/running'>
                <Icon 
                  type="unordered-list"
                />
                All running tasks
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
          <Menu.Item key="newtask">
          <Link to='/newtask'>
            <Icon 
              type="form"
            />
            Create new task
          </Link>
          </Menu.Item>
      </Menu>
    );
  }
}