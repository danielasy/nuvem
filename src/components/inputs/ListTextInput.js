import classNames from 'classnames';
import React from 'react';

import './ListTextInput.css';

class ListTextInput extends React.Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <input
        {...props}
        className={classNames('list-text-input', className)}
        type="text"
      />
    );
  }
}

export default ListTextInput;
