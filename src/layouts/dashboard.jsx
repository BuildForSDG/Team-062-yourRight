import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Hidden, withWidth,
} from '@material-ui/core';
import MobileView from '../templates/mobileDashBoard';
import DesktopView from '../templates/desktopDashboard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

function BreakpointOnly() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Hidden only={['lg', 'xl']}>
          <DesktopView />
        </Hidden>
        <Hidden only={['sm', 'xs', 'md']}>
          <MobileView />
        </Hidden>
      </div>
    </div>
  );
}

export default withWidth()(BreakpointOnly);
