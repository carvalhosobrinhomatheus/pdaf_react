import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../../store/state';
import { Button, Grid, ButtonGroup, Box, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { buscarTodosPerfisService } from '../../../services/perfilService';
import PerfilAccordion from './PerfilAccordion';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Perfil() {
  const classes = useStyles();
  const [{ perfil }, dispatchPerfil] = useStateValue();

  useEffect(() => {
    if (perfil.lista.length == 0) {
      buscarPerfisAPI();
    }
  }, [perfil.lista]);

  const buscarPerfisAPI = async () => {
    const response = await buscarTodosPerfisService();
    dispatchPerfil({
      type: 'inserirLista',
      data: response.data,
    });
  };

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="flex-end" m={1} p={1}>
        <Button>Novo</Button>
      </Box>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <PerfilAccordion classes={classes} />
    </div>
  );
}