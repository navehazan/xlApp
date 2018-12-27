
const isLoggedInReducerDefaultState = false;
export default (state = isLoggedInReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_IS_LOGGED_IN":
      return action.payload;
    default:
      return state;
  }
};


