// import React, { useState, useEffect } from 'react';
import React from 'react';
import Routes from './Routes';
import 'typeface-roboto';

// document.title = "PDAF - SEEDF";
// const App = () => <Routes />;

import Botao from './Botao';

import { StateProvider } from '../src/store/state';
import { InitialState } from '../src/store/initialState';

import { reducerDashboard } from './modulos/Dashboard/reducerDashboard';
import { reducerUsuario } from './modulos/Usuario/reducerUsuario';
import { reducerPerfil } from './modulos/Perfil/reducerPerfil';

const mainReducer = ({theme, usuario, perfil}, action) => ({
    theme: reducerDashboard(theme, action),
    usuario: reducerUsuario(usuario, action),
    perfil: reducerPerfil(perfil, action),
});

const App = () => {

    return (
      <StateProvider initialState={InitialState} reducer={mainReducer}>
        <Routes />
      </StateProvider>
    );
  }


export default App;