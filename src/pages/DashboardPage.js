import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../components/layout/Dashboard';
import NuvemTheme from '../components/layout/NuvemTheme';
import CreateProductPage from './CreateProductPage';
import ProductsPage from './ProductsPage';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Vestido',
          price: 12999,
          stock: 10,
        },
        {
          id: 2,
          name: 'Camisa',
          price: 8099,
          stock: 5,
        }
      ],
    };
  }

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
                render={() => <ProductsPage products={this.state.products} />}
              />
              <Route
                path="/products/new"
                exact={true}
                render={() => <CreateProductPage />}
              />
            </Switch>
          }
          title={
            <Route
              path="/products/new"
              exact={true}
              children={({ match }) => match ? 'Meus produtos / Adicionar um produto' : 'Meus produtos'}
            />
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
