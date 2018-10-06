import BaseCheckbox from '@material-ui/core/Checkbox';
import React from 'react';

import CheckBoxIcon from '../icons/CheckBoxFilled';

class Checkbox extends React.Component {
  render() {
    return (
      <BaseCheckbox
        icon={<CheckBoxIcon />}
        {...this.props}
      />
    );
  }
}

export default Checkbox;
