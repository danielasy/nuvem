import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import React from 'react';

import TextArea from '../components/inputs/TextArea';
import TextInput from '../components/inputs/TextInput';

import './CreateProductPage.css';

class CreateProductPage extends React.Component {
  render() {
    return (
      <form className="create-product-page">
        <div className="create-product-page__gallery">
          <h3>Fotos do seu produto</h3>
        </div>
        <div className="create-product-page__box">
          <label htmlFor="product-name">Nome</label>
          <TextInput
            id="product-name"
            className="create-product-page__name-input"
            placeholder="Ex.: Chaveiro de plástico"
            required={true}
          />
          <label htmlFor="product-description">Descrição</label>
          <TextArea
            id="product-description"
            className="create-product-page__description-textarea"
          />
        </div>
        <div className="create-product-page__box--columns">
          <div className="create-product-page__box-column">
            <label htmlFor="product-price">Preço</label>
            <TextInput
              id="product-price"
              placeholder="0,00"
            />
          </div>
          <div className="create-product-page__box-column">
            <label htmlFor="product-stock">Estoque</label>
            <TextInput id="product-stock" />
          </div>
        </div>
        <div className="create-product-page__actions">
          <Button
            color="secondary"
            variant="contained"
            style={{
              color: '#FFFFFF',
              marginRight: 24,
            }}
          >
            Publicar produto
          </Button>
          <Button
            color="primary"
            variant="outlined"
          >
            Cancelar
          </Button>
        </div>
      </form>
    );
  }
}

CreateProductPage.propTypes = {};

export default CreateProductPage;
