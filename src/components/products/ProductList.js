import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '../inputs/Checkbox';
import ProductListItem from './ProductListItem';

import './ProductList.css';

class ProductList extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return <p>Não há produtos para visualizar.</p>
    }

    const start = (this.props.page - 1) * this.props.pageSize;
    const end = start + this.props.pageSize;

    return (
      <table className="product-list">
        <thead>
          <tr>
            <th>
              <Checkbox color="secondary" />
            </th>
            <th>Imagem</th>
            <th>Produto</th>
            <th className="product-list__field--md">Estoque</th>
            <th className="product-list__field--sm">Preço Original</th>
            <th className="product-list__field--lg">Preço Promocional</th>
            <th className="product-list__field--lg">Variações</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items
              .slice(start, end)
              .map((item) => (
                <ProductListItem
                  key={item.id}
                  item={item}
                />
              ))
          }
        </tbody>
      </table>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pricePromo: PropTypes.number,
    stock: PropTypes.number.isRequired,
  })).isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default ProductList;
