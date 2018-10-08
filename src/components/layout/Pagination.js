import PropTypes from 'prop-types';
import React from 'react';

import PaginationButton from '../buttons/PaginationButton';

import './Pagination.css';

const DELTA = 2;

class Pagination extends React.PureComponent {
  /**
   * Render page links handling the cases where there are too many pages.
   * 
   * Credit: https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
   */
  renderPageLinks = (current, total, url) => {
    const left = current - DELTA;
    const right = current + DELTA + 1;

    const range = [];
    const pagination = [];

    let last;

    // Which page numbers will appear in the list?
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= left && i < right)) {
        range.push(i);
      }
    }

    // Create page links and add '...' if necessary
    for (let i of range) {
      if (last) {
        if (i - last === 2) {
          pagination.push(
            <li key={last + 1}>
              <PaginationButton to={`${url}?page=${last + 1}`}>
                {last + 1}
              </PaginationButton>
            </li>
          );
        } else if (i - last !== 1) {
          pagination.push(<li key={`...${i}`}>...</li>);
        }
      }
      pagination.push(
        <li key={i}>
          <PaginationButton isActive={i === current} to={`${url}?page=${i}`}>
            {i}
          </PaginationButton>
        </li>
      );
      last = i;
    }

    return pagination;
  };

  render() {
    const totalPages = Math.ceil(this.props.totalItems / this.props.pageSize);

    if (totalPages === 0) {
      return null;
    }

    return (
      <ol className="pagination">
        {this.renderPageLinks(this.props.page, totalPages, this.props.url)}
      </ol>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pagination;
