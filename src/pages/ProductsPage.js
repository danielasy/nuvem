import PropTypes from 'prop-types';
import React from 'react';

import Pagination from '../components/layout/Pagination';
import ProductList from '../components/products/ProductList';
import { getPageNumber } from '../utils/pagination';
import { parse } from '../utils/query';

const PAGE_SIZE = 20;

class ProductsPage extends React.Component {
  render() {
    const query = parse(this.props.location.search);
    return (
      <>
        <ProductList
          page={getPageNumber(query.page)}
          pageSize={PAGE_SIZE}
          items={this.props.products}
        />
        <Pagination
          page={getPageNumber(query.page)}
          pageSize={PAGE_SIZE}
          totalItems={this.props.products.length}
          url="/products"
        />
      </>
    );
  }
}

ProductsPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
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
