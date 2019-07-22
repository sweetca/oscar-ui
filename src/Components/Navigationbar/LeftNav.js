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
              <Icon type="setting" />
              Overviews
            </span>
          }
        >
          <Menu.ItemGroup title="Overviews">
            <Menu.Item key="components">
              <Link to='/components'>
              <Icon 
                type="tool"
                theme="twoTone"
                twoToneColor="#black"
              />
              All components
              </Link>
            </Menu.Item>
            <Menu.Item key="tasks">
              <Link to='/tasks'>
                <Icon 
                  type="tool"
                  theme="twoTone"
                  twoToneColor="#black"
                />
                All tasks
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span>
              <Icon type="setting" />
              Tools
            </span>
          }
        >
          <Menu.ItemGroup title="Tools">
            <Menu.Item key="statustool">
            <Link to='/statustool'>
              <Icon 
                type="tool"
                theme="twoTone"
                twoToneColor="#black"
              />
              Task status
            </Link>
            </Menu.Item>
            <Menu.Item key="newtask">
            <Link to='/newtask'>
              <Icon 
                type="tool"
                theme="twoTone"
                twoToneColor="#black"
              />
              Create new task
            </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}