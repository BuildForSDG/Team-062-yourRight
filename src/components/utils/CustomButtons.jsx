import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const CustomButtons = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide }
  } = rest;
  return (
    <div className="carousel-button-group custom-arrow">
      {' '}
      <button className={currentSlide === 0 ? 'disable slide-btn' : 'slide-btn'} onClick={() => previous()}>
        <ArrowBackIosIcon />
      </button>
      <button className="slide-btn" onClick={() => next()}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

