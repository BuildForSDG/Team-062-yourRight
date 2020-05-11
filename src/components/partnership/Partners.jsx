import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slideImage from '../../images/YourRight.png';
import { responsive } from '../utils/MediaQuery';
import { CustomButtons } from '../utils/CustomButtons';

const Partners = () => {
  return (
    <div className="partners">
      <Carousel arrows={false} customButtonGroup={<CustomButtons />} responsive={responsive}>
        <div>
          <img src={slideImage} alt="partners" />
        </div>
        <div>
          <img src={slideImage} alt="partners" />
        </div>
        <div>
          <img src={slideImage} alt="partners" />
        </div>
        <div>
          <img src={slideImage} alt="partners" />
        </div>
        <div>
          <img src={slideImage} alt="partners" />
        </div>
        <div>
          <img src={slideImage} alt="partners" />
        </div>
      </Carousel>
    </div>
  );
};

export default Partners;
