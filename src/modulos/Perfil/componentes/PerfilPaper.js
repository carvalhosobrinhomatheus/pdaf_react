import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PerfilForm from './PerfilForm';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PerfilPaper() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <PerfilForm></PerfilForm>
    </Paper>
  );
}