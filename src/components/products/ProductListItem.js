import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { printBRL } from '../../utils/price';
import Checkbox from '../inputs/Checkbox';
import ListTextInput from '../inputs/ListTextInput';

import placeholder from '../../assets/placeholder_product.png';

class ProductListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>
          <Checkbox />
        </td>
        <td className="product-list__product-image">
          <img src={item.imageUrl || placeholder} alt={item.name} />
        </td>
        <td className="product-list__product-name">
          <Link to="">{item.name}</Link>
        </td>
        <td className="product-list__field--md">
          <ListTextInput
            className="product-list__input"
            value={item.stock}
          />
        </td>
        <td className="product-list__field--sm">
          <ListTextInput
            className="product-list__input"
            value={printBRL(item.price)}
          />
        </td>
        <td className="product-list__field--lg">
          <ListTextInput
            className="product-list__input"
            value={item.pricePromo ? printBRL(item.pricePromo) : '*'}
          />
        </td>
        <td className="product-list__field--lg"></td>
        <td>
          <Link to="" className="product-list__action-link">
            <EditIcon style={{ width: 16, height: 16, marginRight: 8 }} />
            Editar
          </Link>
          <Link to="" className="product-list__action-link">
            <DeleteIcon style={{ width: 16, height: 16, marginRight: 8 }} />
            Apagar
          </Link>
        </td>
      </tr>
    );
  }
}

ProductListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pricePromo: PropTypes.number,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductListItem;
