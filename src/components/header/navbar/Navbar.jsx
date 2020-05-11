import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/">SERVICES</Link>
        <Link to="/">HOME</Link>
      </nav>
    </>
  );
};

export default Navbar;
