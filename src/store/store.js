import { combineReducers } from "redux";
import { postReducer, userReducer } from "../reducers/index";

export const webApp = combineReducers({
  posts: postReducer,
  user: userReducer,
});

export default webApp;
