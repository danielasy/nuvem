import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  root: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'none',
    whiteSpace: 'nowrap',
  },
  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

class StoreButton extends React.Component {
  render() {
    return (
      <Button
        classes={{
          root: this.props.classes.root,
        }}
        color="secondary"
        fullWidth={true}
        variant="outlined"
        href={this.props.href}
        target="_blank"
      >
        <span className={this.props.classes.label}>{this.props.children}</span>
        <LaunchIcon />
      </Button>
    );
  }
}

StoreButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};

export default withStyles(styles)(StoreButton);
