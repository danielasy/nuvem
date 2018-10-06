import React from 'react';

import './ListTextInput.css';

class ListTextInput extends React.Component {
  render() {
    return (
      <input {...this.props} className="list-text-input" type="text" />
    );
  }
}

export default ListTextInput;
