import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../templates/Appbar';
import Sidebar from '../templates/Drawer';
import Content from '../templates/Main';
import backgroundImg from '../svg/undraw_onboarding_o8mv.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundImage: `url(${backgroundImg})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
  },
}));


export default function () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header openState={open} drawerOpener={handleDrawerOpen} />
      <Sidebar closeState={open} drawerCloser={handleDrawerClose} />
      <Content drawerState={open} />
    </div>
  );
}
