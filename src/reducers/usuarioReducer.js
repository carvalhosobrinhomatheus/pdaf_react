export const reducerUsuario = (state, action) => {

  switch (action.type) {
    case 'listarUsuarios':
      return {
        ...state
      };
    case 'popularListaUsuario':
      return {
        ...state,
        lista: action.data,
      };
    case 'inserirUsuario':
      return {
        ...state,
        lista: action.data,
      };
    case 'alterarUsuario':
      return {
        ...state,
        lista: action.data,
      };
    case 'deletarUsuario':
      return {
        ...state,
        lista: action.data,
      };
    default:
      return state;
  }
};