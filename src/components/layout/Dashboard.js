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
    height: 64,
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
  toolbar: {
    height: '100%',
  },
  toolbarTitle: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingRight: 8,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  menuButton: {
    marginLeft: 8,
    marginRight: 8,
    [theme.breakpoints.up('md')]: {
      marginLeft: 12,
      marginRight: 20,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    border: 0,
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    marginTop:  64,
    overflow: 'auto',
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 1}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 3,
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
          <Toolbar className={classes.toolbar} disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Abrir ou fechar menu"
              onClick={this.handleDrawerToggle}
              className={classNames(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <h1 className={classes.toolbarTitle}>{title}</h1>
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
