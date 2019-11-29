import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../store/state';
import { Button, Grid, ButtonGroup, Box, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { buscarTodosPerfisService } from '../../services/perfilService';
import PerfilAccordion from './PerfilAccordion';
import PerfilPaper from './PerfilPaper';
import Styles from '../../styles/perfilStyles';

export default function Perfil() {

  const classes = Styles();

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