export default (state, action) => {
  switch (action.type) {
    case 'USER_SESSION': {
      return {...state, session: action.payload.session};
    }
    default:
      return state;
  }
};
