import React from 'react';
import logoImage from '../../../images/justlogo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img height="50" src={logoImage} alt="your Right" />
      <span
        style={{
          fontSize: '2rem',
          color: '#fff'
        }}
      >
        YourRight
      </span>
    </Link>
  );
};

export default Logo;
