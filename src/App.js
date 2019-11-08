import React from 'react';
import Routes from './Routes';
import 'typeface-roboto';

import { StateProvider } from '../src/store/state';
import { InitialState } from '../src/store/initialState';

import { reducerDashboard } from './reducers/dashboardReducer';
import { reducerUsuario } from './reducers/usuarioReducer';
import { reducerPerfil } from './reducers/perfilReducer';

const mainReducer = ({ theme, usuario, perfil }, action) => ({
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