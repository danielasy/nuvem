import classNames from 'classnames';
import React from 'react';

import './TextInput.css';

class TextInput extends React.Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <input
        {...props}
        className={classNames('text-input', className)}
        type="text"
      />
    );
  }
}

export default TextInput;
