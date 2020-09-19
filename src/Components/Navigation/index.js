import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.topnav}>
        <NavLink exact to="/" activeClassName={styles.topnavSelected}>Home</NavLink>
        <NavLink exact to="/current" activeClassName={styles.topnavSelected}>Current</NavLink>
        <NavLink exact to="/other" activeClassName={styles.topnavSelected}>Other Projects</NavLink>
        {this.props.currentPage}
      </div>
    );
  }
}