import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.css';
import './Content.scss';

const Content = () => {
  return (
    <div className="content">
      <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceRight">
        {' '}
        <h1>
          Fight Against Gender Mutilation <br /> And Forced Marriage
        </h1>
        <p>
          {' '}
          Fight against forced marriages <br /> and gender mutilation Fight against forced marriages <br /> and gender
          mutilation
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="content-button">
          {/* <Button variant="contained" color="secondary">
            <Typography variant="button" display="inline" gutterBottom>
              REGISTER
            </Typography>
          </Button>
          <Button variant="contained" color="primary">
            <Typography variant="button" display="inline" gutterBottom>
              TAKE ACTION
            </Typography>
          </Button> */}
        </div>
      </ScrollAnimation>
    </div>
  );
};
export default Content;
