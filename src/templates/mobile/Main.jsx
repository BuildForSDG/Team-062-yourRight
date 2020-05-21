/* eslint-disable react/no-children-prop */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, useScrollTrigger, Fab, Zoom, Toolbar,
} from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import Card from './Card';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const scrollStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop({ children, window }) {
  const classes = scrollStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

ScrollTop.defaultProps = {
  window: undefined,
};

function Content({ drawerState }, { children, window }) {
  const classes = useStyles();
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawerState,
      })}
    >
      <div className={classes.drawerHeader}>
        <Toolbar id="back-to-top-anchor" />
      </div>
      {[...new Array(7)]
        .map(() => (
          <List>
            <ListItem>
              <Card button />
            </ListItem>
          </List>
        ))}
      <ScrollTop children={children} window={window}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </main>
  );
}

Content.propTypes = {
  drawerState: PropTypes.bool.isRequired,
};

export default Content;
