import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav-link">
          <Link to="/">ABOUT</Link>
          <Link to="/">SERVICES</Link>
          <Link to="/">DONATE</Link>
          <Link to="/">CONTACT</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
