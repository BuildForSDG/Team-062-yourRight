import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <section className="content">
      <div className="content-title">
        <h1>Fight Against Female Mutilation and Forceful Marriages</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat numquam voluptas iure qui.</p>
      </div>
      <div className="action-button">
        <Link to="/" className="btn">
          TAKE ACTION
        </Link>
        <Link to="/" className="btn btn-white">
          TAKE ACTION
        </Link>
      </div>
    </section>
  );
};

export default Content;
