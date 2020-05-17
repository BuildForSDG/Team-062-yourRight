import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
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

function Content({ drawerState }) {
  const classes = useStyles();
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawerState,
      })}
    >
      <div className={classes.drawerHeader} />
      <List>
        <ListItem>
          <Card button />
        </ListItem>
      </List>
    </main>
  );
}

Content.propTypes = {
  drawerState: PropTypes.isRequired,
};

export default Content;
