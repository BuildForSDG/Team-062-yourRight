import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function Header({ appBarClass, openDrawer, iconButtonClass }) {
  return (
    <AppBar
      position="fixed"
      className={appBarClass}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
          edge="start"
          className={iconButtonClass}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  appBarClass: PropTypes.isRequired,
  openDrawer: PropTypes.isRequired,
  iconButtonClass: PropTypes.isRequired,
};

export default Header;
