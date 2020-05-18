import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, IconButton, Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

function Header({ drawerOpener, openState }) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: openState,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={drawerOpener}
          edge="start"
          className={clsx(classes.menuButton, openState && classes.hide)}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          Your Right
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  drawerOpener: PropTypes.func.isRequired,
  openState: PropTypes.bool.isRequired,
};

export default Header;
