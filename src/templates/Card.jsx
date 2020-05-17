import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActions, CardContent, Button, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '95vw',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
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
