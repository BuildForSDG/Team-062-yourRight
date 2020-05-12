import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Content = () => {
  return (
    <div className="content">
      <Typography variant="h2" component="h2" color="inherit" gutterBottom>
        Fight Against Gender Mutilation <br /> And Forced Marriage
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Fight against forced marriages and gender mutilation Fight against forced marriages and gender mutilation
      </Typography>
      <div className="content-button">
        <Button variant="contained" color="secondary">
          <Typography variant="button" display="inline" gutterBottom>
            REGISTER
          </Typography>
        </Button>
        <Button variant="contained" color="primary">
          <Typography variant="button" display="inline" gutterBottom>
            TAKE ACTION
          </Typography>
        </Button>
      </div>
    </div>
  );
};
export default Content;
