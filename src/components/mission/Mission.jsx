import React from 'react';
import './Mission.scss';

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission-title">
        <h3>Why?</h3>
        <p>
          Harmful cultural practices, such as child marriage and female genital mutilation (FGM), are discriminatory
          practices committed regularly over such long periods of time that communities and societies begin to consider
          them acceptable.
        </p>
        <p>
          Around the world, hundreds of millions of girls and boys have experienced some form of violence, exploitation
          or harmful practice, although girls are at much greater risk. Child marriage and FGM span continents and
          cultures, yet, in every society in which they are practiced, they reflect values that hold girls in low
          esteem.
        </p>
      </div>
      <div className="mission-quote">
        <div className="border-line"></div>
        <span>
          " Some 650 million girls and women around the world today have been married as children, and over 200 million
          have undergone FGM."
        </span>
        <a href="https://www.unicef.org/protection/harmful-practices" target="_blanck">
          Learn More from UNICEF
        </a>
        <div className="border-line"></div>
      </div>
    </div>
  );
};

export default Mission;
