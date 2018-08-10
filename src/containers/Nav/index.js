import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.scss';

const MyNavLink = props => (
  <NavLink {...props} activeClassName={styles.activeLink} className={styles.link} />
);

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.navItemList}>
      <li className={styles.navItem}><MyNavLink to="/" exact>Home</MyNavLink></li>
      <li className={styles.navItem}><MyNavLink to="/about" exact>About</MyNavLink></li>
    </ul>
  </nav>
);

export default Nav;
