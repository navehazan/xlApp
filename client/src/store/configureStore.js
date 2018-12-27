import { createStore, combineReducers } from "redux";
import isLoggedInReducer from "../reducers/isLoggedIn";
import cellsReducer from "../reducers/cells";
export default () =>
  createStore(
    combineReducers({
      isLoggedIn: isLoggedInReducer,
      cells: cellsReducer
    })
  );
