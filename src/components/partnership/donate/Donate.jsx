import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Donate.scss';

const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-image"></div>
      <div className="donate-action">
        <h3>Take action</h3>
        <p>
          We are seeking for partnership and sponsorship to facilitate this goal.
          <br />
          <br />
          Children need champions. Get involved, educate, partner with us, and give every child a fair chance to
          maximize their potential and succeed.
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
