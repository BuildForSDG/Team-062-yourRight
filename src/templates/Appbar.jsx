import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import { Menu, Create } from '@material-ui/icons';

function Header({
  appBarClass, openDrawer, iconButtonClass, typographyClass,
}) {
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
        <Typography className={typographyClass} variant="h6" noWrap>
          Your Right
        </Typography>
        <IconButton color="inherit">
          <Create />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  appBarClass: PropTypes.isRequired,
  openDrawer: PropTypes.isRequired,
  iconButtonClass: PropTypes.isRequired,
  typographyClass: PropTypes.isRequired,
};

export default Header;
