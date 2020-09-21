import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

import Logo from '../Logo';

import { AuthUserContext } from '../../Firebase';
import * as ROUTES from '../../Constants/routes';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <AuthUserContext.Consumer>
          {authUser =>
            <NavigationBase authUser={authUser} />
          }
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

class NavigationBase extends React.Component {
  render() {
    return (
      <div className={styles.nav}>
      <Logo style={{float: 'left', margin: '5px'}} height={28} />
      <div className={styles.topnav}>
        
        <NavLink className={styles.navHeader} exact to={ROUTES.HOME} activeClassName={styles.topnavSelected}>Home</NavLink>
        <NavLink className={styles.navHeader} exact to={ROUTES.CURRENT} activeClassName={styles.topnavSelected}>Current</NavLink>
        <NavLink className={styles.navHeader} exact to={ROUTES.OTHER} activeClassName={styles.topnavSelected}>Other Projects</NavLink>
        {!this.props.authUser ?
          <NavLink className={`${styles.login} ${styles.navHeader}`} exact to={ROUTES.SIGN_IN} activeClassName={styles.topnavSelected}>Sign In</NavLink> : <div className={`${styles.login} ${styles.navHeader}`}>{this.props.authUser.username}</div>}
      </div>
      </div>
    );
  }
}