import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, List, Divider, IconButton,
  ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import {
  ChevronLeft, ChevronRight, Home, AccountCircle,
} from '@material-ui/icons';

function Sidebar({
  drawerClass, drawerOpen, drawerPaperClass,
  closeDrawer, drawerHeaderClass, drawerTheme,
}) {
  return (
    <Drawer
      className={drawerClass}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      classes={drawerPaperClass}
    >
      <div className={drawerHeaderClass}>
        <IconButton onClick={closeDrawer}>
          {drawerTheme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {[{ text: 'Home', icon: <Home /> },
          { text: 'Profile', icon: <AccountCircle /> }]
          .map(({ text, icon }) => (
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  drawerClass: PropTypes.isRequired,
  drawerOpen: PropTypes.isRequired,
  drawerPaperClass: PropTypes.isRequired,
  closeDrawer: PropTypes.isRequired,
  drawerHeaderClass: PropTypes.isRequired,
  drawerTheme: PropTypes.isRequired,
};

export default Sidebar;
