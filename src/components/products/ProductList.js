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

    return (
      <table className="product-list">
        <thead>
          <tr>
            <th>
              <Checkbox color="secondary" />
            </th>
            <th>Imagem</th>
            <th>Produto</th>
            <th>Estoque</th>
            <th>Preço Original</th>
            <th>Preço Promocional</th>
            <th>Variações</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map((item) => (
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
};

export default ProductList;
