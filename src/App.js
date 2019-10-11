// import React, { useState, useEffect } from 'react';
import React from 'react';
import Main from './Main';
import { makeStyles } from '@material-ui/core/styles';
import Bar from './componentes/main/Bar';
import Usuario from './componentes/usuario/Usuario';

export default function App() {
  document.title = "PDAF - SEEDF";
  return (
    <div>
      <Bar />
    </div>
  );
}