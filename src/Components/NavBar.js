import React, { PureComponent } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../Assets/logoSmall.png';
import HomeIcon from '../Assets/home.png';
import ComponentsIcon from '../Assets/components.png';
import TasksIcon from '../Assets/file.png';
import RunningIcon from '../Assets/running.png';
import NewIcon from '../Assets/new.png';
import styles from '../Styles/NavigationBar/NavBar.module.css';

const menuItems = [
  { name: 'Home', url: '/home', img: HomeIcon },
  { name: 'Components', url: '/components', img: ComponentsIcon },
  { name: 'Tasks', url: '/tasks', img: TasksIcon },
  { name: 'Running', url: '/running', img: RunningIcon },
  { name: 'Create Task', url: '/newtask', img: NewIcon },
];

export default class NavigationBar extends PureComponent {
  render() {
    return (
      <header className={styles.Navigation_Wrapper}>
        <nav className={styles.NavigationBar}>
          <div className={styles.NavigationBar_Logo_Container}>
            <img src={Logo} alt="Codescoop - cs360" />
            <Link to="/home">
              Oscar - cs360
            </Link>
          </div>
          <div className={styles.NavigationBar_MenuItems_Container}>
            <ul>
              {menuItems.map(menuItem => (
                <li key={menuItem.name}>
                  <NavLink
                    to={menuItem.url}
                    activeClassName={styles.activeLink}
                  >
                    <img src={menuItem.img} alt={menuItem.name} />
                    {menuItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
