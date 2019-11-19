export const reducerPerfil = (state, action) => {

  switch (action.type) {
    case 'listarPefis':
      return {
        ...state
      };
    case 'inserirListaSimples':
      return {
        ...state,
        listaSimples: action.data,
      };
    case 'listarListaSimples':
        return {
          ...state.listaSimples,
        };
    default:
      return state;
  }
};