import PropTypes from 'prop-types';
import React from 'react';

import ProductList from '../components/products/ProductList';

class ProductsPage extends React.Component {
  render() {
    return (
      <ProductList items={this.props.products} />
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pricePromo: PropTypes.number,
    stock: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductsPage;
