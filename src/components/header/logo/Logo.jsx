import React from 'react';
import logoImage from '../../../images/logonew.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImage} alt="your Right" />
    </Link>
  );
};

export default Logo;
