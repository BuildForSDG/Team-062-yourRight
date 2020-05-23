import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActions, CardContent, Button, Typography,
} from '@material-ui/core';

function CardComponent({ classAttr }) {
  return (
    <Card className={classAttr}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Report Title
        </Typography>
        <Typography variant="body2" component="p">
          Report Body
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {
  classAttr: PropTypes.string.isRequired,
};

export default CardComponent;
