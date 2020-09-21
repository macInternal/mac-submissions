import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from '../Navigation';

import Home from '../Home';
import Current from '../Current';
import OtherProjects from '../OtherProjects';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

import { withAuthentication } from '../../Firebase';

import * as ROUTES from '../../Constants/routes.js';

import styles from './index.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.main}>
      {process.env.REACT_APP_TESTING}
        <Router>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.CURRENT} component={Current} />
            <Route exact path={ROUTES.OTHER} component={OtherProjects} />
            <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path="/">
              <div>404 Not Found</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuthentication(App);
