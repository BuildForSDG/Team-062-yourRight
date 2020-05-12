import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logonew.svg';

const About = () => {
  return (
    <div className="about">
      <h3>Your Right's Work</h3>
      <span>
        UNICEF works in over 190 countries and territories to save children's lives, <br /> to defend their rights, and
        to help them fulfil their potential, from early childhood through adolescence. <br /> And we never give up.
      </span>
      <div className="about-grid">
        <div className="about-items">
          <img src={logo} alt="scksjdkcj" />
          <Link to="/">children proteect</Link>
        </div>
        <div className="about-items">
          <img src={logo} alt="scksjdkcj" />
          <Link to="/">children proteect</Link>
        </div>
        <div className="about-items">
          <img src={logo} alt="scksjdkcj" />
          <Link to="/">children proteect</Link>
        </div>
        <div className="about-items">
          <img src={logo} alt="scksjdkcj" />
          <Link to="/">children proteect</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
