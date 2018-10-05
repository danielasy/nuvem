import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect
            from="/"
            exact={true}
            to="/products"
          />
          <Route
            path="/products"
            component={DashboardPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
