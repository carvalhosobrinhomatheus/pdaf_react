export const reducerPerfil = (state, action) => {

  switch (action.type) {
    case 'listarPefis':
      return {
        ...state

      };
    case 'inserirLista':
      return {
        ...state,
        lista: action.data,
      };
    case 'alterarListaPerfilPermissao':
      return {
        ...state,
        lista: action.data
      }
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