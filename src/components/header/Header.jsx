import React from 'react';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      {/* <a className="btn" href="ww..com">
        Take Action
      </a> */}
    </header>
  );
};

export default Header;
