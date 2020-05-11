import React from 'react';

export const CustomButtons = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide }
  } = rest;
  return (
    <div className="carousel-button-group custom-arrow">
      {' '}
      <button className={currentSlide === 0 ? 'disable slide-btn' : 'slide-btn'} onClick={() => previous()}>
        {'<'}
      </button>
      <button className="slide-btn" onClick={() => next()}>
        {'>'}
      </button>
    </div>
  );
};

// export default CustomArrows;
