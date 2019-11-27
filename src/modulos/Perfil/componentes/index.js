import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../../store/state';
import { Button, Grid, ButtonGroup, Box, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { buscarTodosPerfisService } from '../../../services/perfilService';
import PerfilAccordion from './PerfilAccordion';
import PerfilPaper from './PerfilPaper';

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
  const [paperInserir, setPaperInserir] = useState(false);

  const handleClick = () => {
    setPaperInserir(!paperInserir);
  };

  useEffect(() => {
    if (perfil.lista.length == 0) {
      buscarPerfisAPI();
    }
  }, [perfil.lista]);

  const buscarPerfisAPI = async () => {
    const response = await buscarTodosPerfisService();
    dispatchPerfil({
      type: 'inserirPerfil',
      data: response.data,
    });
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleClick}>Novo</Button>
      {paperInserir && <PerfilPaper />}
      <PerfilAccordion classes={classes} />
    </div>
  );
}