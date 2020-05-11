import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const OpenMenu = () => {
    const navbar = document.querySelector('.side-menu');
    navbar.classList.add('open');
    setIsOpened(true);
  };
  const closeMenu = () => {
    const navbar = document.querySelector('.side-menu');
    navbar.classList.remove('open');
    setIsOpened(false);
  };

  // window.addEventListener('click', () => {
  //   console.log('check');

  //   const navbar = document.querySelector('.side-menu');
  //   navbar.classList.add('open');
  // });
  return (
    <>
      <div className="toggle-btn" onClick={OpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="side-menu">
        <div className="menu">
          <span onClick={closeMenu}>&times;</span>
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">SERVICES</Link>
            <Link to="/">HOME</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
