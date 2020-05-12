import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SideNav from './sideMenu/SideMenu';
import Logo from './logo/Logo';

import Navbar from './navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },

  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      '&: ul': {
        margin: '.4rem 6rem ',
        color: '#fff'
      }
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Navbar />
            <Button variant="contained" color="secondary">
              TAKE ACTION
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-haspopup="true" color="inherit">
              <SideNav />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
