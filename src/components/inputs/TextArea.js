import classNames from 'classnames';
import React from 'react';

import './TextArea.css';

class TextArea extends React.Component {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <textarea
        {...props}
        className={classNames('text-area', className)}
      >
        {children}
      </textarea>
    );
  }
}

export default TextArea;
