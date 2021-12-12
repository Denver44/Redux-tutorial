import { combineReducers } from "redux";
import { postReducer, userReducer } from "../reducers";

export default combineReducers({
  post: postReducer,
  user: userReducer,
});
