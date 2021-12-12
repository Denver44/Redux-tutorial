import { combineReducers } from "redux";
import { postReducer, userReducer } from "../reducers";

export default combineReducers({
  posts: postReducer,
  user: userReducer,
});
