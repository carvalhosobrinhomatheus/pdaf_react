import React from 'react';
import Styles from '../styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function Main() {
  document.title = "PDAF - SEEDF"
  const classes = Styles();

  return (
    <span style={{ cursor: "not-allowed" }}>
      <Box display="flex" flexDirection="row-reverse" >
        <Button href="/login" variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
      </Box>
    </span>
  );

}
