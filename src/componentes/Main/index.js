import React from 'react';
import Styles from './styles';
import Button from '@material-ui/core/Button';

export default function Main() {
  document.title = "PDAF - SEEDF"
  const classes = Styles();
  
  return (
    <span style={{ cursor: "not-allowed" }}>
    <Button href="/login" variant="contained" color="primary" className={classes.button}>
        Login
      </Button>
    </span>
  );

}
