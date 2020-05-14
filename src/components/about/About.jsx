import React from 'react';
import { Link } from 'react-router-dom';
import gender from '../../images/gender.svg';
import education from '../../images/education.svg';
import policy from '../../images/policy.svg';
import protection from '../../images/give.svg';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <h3>Our Concern</h3>
      <span>
        YourRight's works is basically to save children's lives and <br /> to defend their rights from early childhood
        through adolescence. <br /> This is what we our goal .
      </span>
      <div className="about-grid">
        <div className="about-items">
          <img src={gender} alt="what we do" />
          <Link to="/">Gender</Link>
        </div>
        <div className="about-items">
          <img src={education} alt="what we do" />
          <Link to="/">Education</Link>
        </div>
        <div className="about-items">
          <img src={policy} alt="what we do" />
          <Link to="/">Social Policies</Link>
        </div>
        <div className="about-items">
          <img src={protection} alt="what we do" />
          <Link to="/">Female Protection</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
