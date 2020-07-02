import React from 'react';
import logoImage from '../../../images/justlogo.svg';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img height="50" src={logoImage} alt="your Right" />
        <span>YourRight</span>
      </div>
    </Link>
  );
};

export default Logo;
