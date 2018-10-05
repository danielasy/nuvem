import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../components/layout/Dashboard';
import NuvemTheme from '../components/layout/NuvemTheme';

class DashboardPage extends React.Component {
  render() {
    return (
      <NuvemTheme>
        <Dashboard
          pathname={this.props.location.pathname}
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
      </NuvemTheme>
    );
  }
}

DashboardPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default DashboardPage;
