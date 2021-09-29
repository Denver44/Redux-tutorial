import { combineReducers } from "redux";
import { postReducer } from "../reducers/index";
import { reducer as formReducer } from "redux-form";

export const webApp = combineReducers({
  post: postReducer,
  form: formReducer,
});

export default webApp;
