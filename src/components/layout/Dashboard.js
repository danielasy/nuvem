import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Sidebar from './Sidebar';

const drawerWidth = 280;

const styles = (theme) => ({
  dashboardFrame: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  drawerPaper: {
    width: drawerWidth,
    border: 0,
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: `96px ${theme.spacing.unit * 3}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -drawerWidth,
    },
  },
  contentShift: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDrawerToggle = () => {
    this.setState((oldState) => ({ open: !oldState.open }));
  };

  render() {
    const { classes, content, pathname, title } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.dashboardFrame}>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          color="inherit"
          elevation={1}
          position="absolute"
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Abrir ou fechar menu"
              onClick={this.handleDrawerToggle}
              className={classNames(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            {title}
          </Toolbar>
        </AppBar>
        <Hidden mdUp={true}>
          <Drawer
            variant="temporary"
            open={open}
            onClose={this.handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
          >
            <Sidebar
              pathname={pathname}
              onNavigationClick={this.handleDrawerClose}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown={true}>
          <Drawer
            variant="persistent"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Sidebar pathname={pathname} />
          </Drawer>
        </Hidden>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {content}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.node,
  pathname: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.node,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
