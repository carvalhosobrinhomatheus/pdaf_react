import React from 'react';
import Button from '@material-ui/core/Button';
import Styles from './styles';

export default function ContainedButtons() {
  const classes = Styles();

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </div>
  );
}