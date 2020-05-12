import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import donatepic from '../../images/donorpic.jpg';

const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-image">{/* <img src={donatepic} alt="donate here" /> */}</div>
      <div className="donate-action">
        <h3>Take action</h3>
        <p>
          Children need champions. Get involved, speak out, volunteer, or become a donor and give every child a fair
          chance to succeed.
        </p>
        <div className="join-btn">
          <Button variant="outlined" color="inherit">
            <Typography variant="button" display="block" gutterBottom>
              JOIN OUR MISSION
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
