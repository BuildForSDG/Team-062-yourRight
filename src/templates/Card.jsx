import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActions, CardContent, Button, Typography,
} from '@material-ui/core';

function CardComponent({ classAttr, title, body }) {
  return (
    <Card className={classAttr}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
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
  title: PropTypes.string,
  body: PropTypes.string,
};

CardComponent.defaultProps = {
  title: 'Report Title',
  body: 'Report Body',
};

export default CardComponent;
