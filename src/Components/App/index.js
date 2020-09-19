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

import styles from './index.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/current" component={Current} />
            <Route exact path="/other" component={OtherProjects} />
            <Route path="/">
              <div>404 Not Found</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
