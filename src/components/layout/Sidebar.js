import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListIcon from '@material-ui/icons/List';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import StoreButton from '../buttons/StoreButton';

import './Sidebar.css';

import bag from '../../assets/bag.png';

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar__store">
          <div className="sidebar__store-info">
            <img className="sidebar__store-logo" src={bag} alt="" />
            <div className="sidebar__store-title">
              <h1>Nome da Minha Loja</h1>
              <h2>Martín Palombo</h2>
            </div>
          </div>
          <div className="sidebar__store-link">
            <StoreButton href="https://www.nuvemshop.com.br/">
              teste-brasil.lojavirtualnuvem.com
            </StoreButton>
          </div>
        </div>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav-list">
            <li
              className={classNames('sidebar__nav-item', {
                'active': this.props.pathname === '/products',
              })}
              onClick={this.props.onNavigationClick}
            >
              <Link to="/products">
                <ListIcon />
                <span>Produtos</span>
                <ChevronRightIcon />
              </Link>
            </li>
            <li
              className={classNames('sidebar__nav-item', {
                'active': this.props.pathname === '/products/new',
              })}
              onClick={this.props.onNavigationClick}
            >
              <Link to="/products/new">
                <AddIcon />
                <span>Adicionar um novo produto</span>
                <ChevronRightIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  onNavigationClick: PropTypes.func,
  pathname: PropTypes.string.isRequired,
};

export default Sidebar;
