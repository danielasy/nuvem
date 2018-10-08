import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import * as React from 'react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#65BDCB',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Open Sans, Tahoma, sans-serif',
        fontWeight: 600,
      },
      contained: {
        boxShadow: 'none',
        padding: '9px 16px',
      },
    },
  },
});

class NuvemTheme extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

NuvemTheme.propTypes = {
  children: PropTypes.node,
};

export default NuvemTheme;
