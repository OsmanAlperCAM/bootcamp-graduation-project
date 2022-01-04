export default (state, action) => {
  switch (action.type) {
    case 'USER_SESSION': {
      return {...state, session: action.payload.session};
    }
    case 'USER_DATA': {
      return {...state, userData: action.payload.userData};
    }
    default:
      return state;
  }
};
