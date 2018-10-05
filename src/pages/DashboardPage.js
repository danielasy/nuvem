import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../components/layout/Dashboard';

class DashboardPage extends React.Component {
  render() {
    return (
      <Dashboard
        content={
          <Switch>
            <Route
              path="/products"
              exact={true}
              render={() => <p>list</p>}
            />
            <Route
              path="/products/new"
              exact={true}
              render={() => <p>new</p>}
            />
          </Switch>
        }
      />
    );
  }
}

export default DashboardPage;
