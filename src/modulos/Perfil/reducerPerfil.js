export const reducerPerfil = (state, action) => {
  
  switch (action.type) {
    case 'listarPefis':
      return {
        ...state.perfil
      };
    default:
      return state;
  }
};