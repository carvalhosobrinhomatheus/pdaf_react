export const reducerDashboard = (state, action) => {
  
  switch (action.type) {
    case 'changeColor':
      return {
        ...state,
        color: action.newColor,
      };
    default:
      return state;
  }
};