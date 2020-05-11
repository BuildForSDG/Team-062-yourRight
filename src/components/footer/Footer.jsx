import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <p>
          Copyrights © 2020 All Rights Reserved By <span>Team-062</span>
        </p>
        <ul>
          <Link to="/">About</Link>
          <Link to="/">Help Desk</Link>
          <Link to="/">Privacy Policy</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
