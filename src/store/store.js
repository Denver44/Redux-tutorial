import { combineReducers } from "redux";
import { postReducer, userReducer } from "../reducers/index";

export const webApp = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default webApp;
