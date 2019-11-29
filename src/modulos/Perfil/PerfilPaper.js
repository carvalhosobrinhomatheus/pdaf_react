import React from 'react';
import Paper from '@material-ui/core/Paper';
import PerfilForm from './PerfilForm';
import Styles from "../../styles/perfilStyles";

export default function PerfilPaper() {
  const classes = Styles();

  return (
    <Paper className={classes.rootPaper}>
      <PerfilForm></PerfilForm>
    </Paper>
  );
}