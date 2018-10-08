import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = () => ({
  root: {
    minWidth: 32,
    padding: 8,
  },
});

class PaginationButton extends React.Component {
  render() {
    return (
      <Button
        classes={this.props.classes}
        component={Link}
        color={this.props.isActive ? 'primary' : 'secondary'}
        to={this.props.to}
        variant="outlined"
      >
        {this.props.children}
      </Button>
    );
  }
}

PaginationButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  isActive: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default withStyles(styles)(PaginationButton);
